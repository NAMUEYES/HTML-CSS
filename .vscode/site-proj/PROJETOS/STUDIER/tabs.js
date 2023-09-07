document.addEventListener("DOMContentLoaded", function () {
    // Simula o clique no botão "Home" quando a página é carregada
    var homeTabButton = document.getElementById("Padrao");
    homeTabButton.click();
});

function abrirAba(event, idTab) {
    var conteudos = document.getElementsByClassName('content');

    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace('ativo', '');
    }

    document.getElementById(idTab).style.display = 'block';
    event.currentTarget.className += ' ativo';
}

function toggleDescription(element) {
    const description = element.nextElementSibling;
    description.classList.toggle("expanded");
}