function acceder() {
    var clave = document.getElementById("clave").value;
    if (clave === "05") {
        document.getElementById("contenido").style.display = "block";
        window.location.href = "htmls/corazon.html";
    } else {
        alert("Clave incorrecta. Inténtelo de nuevo.");
    }
}