function playVideo() {
    var thumbnail = document.querySelector('.video-thumbnail');
    var video = document.querySelector('.video');
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
}