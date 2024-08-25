function playVideo() {
    var video = document.querySelector('.video');
    var thumbnail = document.querySelector('.video-thumbnail');
    var buttons = document.querySelector('.button-container');

    // Mostrar o vídeo e esconder a capa
    thumbnail.style.display = 'none';
    buttons.style.display = 'none'; // Esconde os botões
    video.style.display = 'block';
    video.play(); // Começa a reproduzir o vídeo

    // Adiciona eventos para mostrar os botões quando o vídeo é pausado ou termina
    video.addEventListener('pause', function() {
        buttons.style.display = 'flex'; // Mostra os botões
    });

    video.addEventListener('ended', function() {
        buttons.style.display = 'flex'; // Mostra os botões quando o vídeo termina
    });
}

function rateMovie() {
    alert("Avalie o filme clicando no botão de avaliação.");
}
