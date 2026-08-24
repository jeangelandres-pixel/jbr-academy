#!/usr/bin/env python3
"""
JBR Academy — servidor local de desarrollo.

Sirve el sitio estatico (carpeta site/) y una API minima basada en
archivos JSON para guardar leads de Free Tryout y pedidos de Uniformes.

No requiere instalar nada: usa solo la libreria estandar de Python 3.
Pensado para reutilizarse como base del backend cuando se construya la
app de JBR Academy (los mismos endpoints /api/leads y /api/uniform-orders
pueden migrar a una base de datos real sin cambiar el contrato JSON).
"""

import json
import os
import uuid
import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SITE_DIR = os.path.join(BASE_DIR, "site")
DATA_DIR = os.path.join(BASE_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)

LEADS_FILE = os.path.join(DATA_DIR, "leads.json")
ORDERS_FILE = os.path.join(DATA_DIR, "uniform-orders.json")

API_ROUTES = {
    "/api/leads": LEADS_FILE,
    "/api/uniform-orders": ORDERS_FILE,
}


def _load(path):
    if not os.path.exists(path):
        return []
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return []


def _save(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SITE_DIR, **kwargs)

    def log_message(self, fmt, *args):
        # Log mas corto y legible en la terminal
        print("[server]", self.address_string(), "-", fmt % args)

    def _json_response(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        path = urlparse(self.path).path
        data_file = API_ROUTES.get(path)
        if data_file is None:
            self._json_response(404, {"ok": False, "error": "ruta no encontrada"})
            return

        length = int(self.headers.get("Content-Length", 0) or 0)
        raw = self.rfile.read(length) if length else b"{}"
        try:
            payload = json.loads(raw.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            self._json_response(400, {"ok": False, "error": "JSON invalido"})
            return

        records = _load(data_file)
        record = dict(payload)
        record["id"] = str(uuid.uuid4())
        record["receivedAt"] = datetime.datetime.utcnow().isoformat() + "Z"
        records.append(record)
        _save(data_file, records)

        self._json_response(201, {"ok": True, "id": record["id"]})

    def do_GET(self):
        path = urlparse(self.path).path
        data_file = API_ROUTES.get(path)
        if data_file is not None:
            self._json_response(200, _load(data_file))
            return
        super().do_GET()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8811))
    server = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"JBR Academy — sitio + API corriendo en http://localhost:{port}")
    print(f"Leads guardados en: {LEADS_FILE}")
    print(f"Pedidos de uniforme guardados en: {ORDERS_FILE}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
