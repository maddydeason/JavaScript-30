function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stop function running
    audio.currentTime = 0; //rewind to start of audio file
    audio.play();
    key.classList.add('playing'); //same as key.addClass('playing') in JQuery
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing'); //same as this.removeClass('playing') in JQuery
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
