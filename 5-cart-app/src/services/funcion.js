//Evento para reproduccion icon

export const linkCcolorA = {
    color: 'black',
    textDecoration: 'none',
    padding:'1rem'
}
export const autoPlay = () => {
    var video = document.getElementById("car-video");
    video.play();
}
export const stopPlay = () => {
    var video = document.getElementById("car-video");
    video.currentTime = 0;
    video.pause();
}
const playPause = () => {
    var video = document.getElementById("car-video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
