(function () {
  var ACADEMY_WHATSAPP = "14076864956";
  var form = document.getElementById("uniformForm");
  var success = document.getElementById("uniformSuccess");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = {
      playerName: document.getElementById("playerName").value,
      jerseyNumber: document.getElementById("jerseyNumber").value,
      jerseyName: document.getElementById("jerseyName").value,
      uniformGroup: document.getElementById("uniformGroup").value,
      position: document.getElementById("position").value || "No especificada",
      size: document.getElementById("size").value,
      pieces: document.getElementById("pieces").value,
      quantity: document.getElementById("quantity").value,
      phone: document.getElementById("uniformPhone").value,
      notes: document.getElementById("notes").value || "Ninguna"
    };

    data.type = "uniform-order";
    data.page = window.location.pathname;

    fetch("/api/uniform-orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).catch(function (err) {
      console.warn("No se pudo guardar el pedido en el servidor local (¿está corriendo server.py?):", err);
    });

    var message = "Hola! Quiero ordenar un uniforme de JBR Academy.\n\n" +
      "Jugador/a: " + data.playerName + "\n" +
      "Número deseado: " + data.jerseyNumber + "\n" +
      "Nombre/Apellido en la camiseta: " + data.jerseyName + "\n" +
      "Grupo/Programa: " + data.uniformGroup + "\n" +
      "Posición: " + data.position + "\n" +
      "Talla: " + data.size + "\n" +
      "Piezas: " + data.pieces + "\n" +
      "Cantidad: " + data.quantity + "\n" +
      "Teléfono: " + data.phone + "\n" +
      "Notas: " + data.notes;

    window.open("https://wa.me/" + ACADEMY_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank");

    form.style.display = "none";
    success.classList.add("visible");
  });
})();
