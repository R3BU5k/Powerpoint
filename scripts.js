// Funzione per cambiare l'URL dell'iframe in base alla selezione del menu
function cambiaURL() {
    var select = document.getElementById("urlSelector");
    var iframe = document.getElementById("iframe");
    var selectedURL = select.options[select.selectedIndex].value;
    iframe.src = selectedURL;
}

function filtroOpzioni() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var select = document.getElementById("urlSelector");
    var options = select.getElementsByTagName("option");

    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var optionText = option.textContent.toLowerCase();

        if (optionText.includes(input) || input === "") {
            option.style.display = "block";  // Mostra l'opzione
        } else {
            option.style.display = "none";  // Nascondi l'opzione
        }
    }
}
