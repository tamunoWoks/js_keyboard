function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if its not a transform
    e.target.classList.remove('playing');
}



window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);

    if(!audio) return; // stop function from running if audio element attached to key

    key.classList.add('playing');   
    audio.currentTime = 0; // auto-rewind audio
    audio.play();

    
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


