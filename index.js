window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio) return; // stop function from running if audio element attached to key
    audio.currentTime = 0; // auto-rewind audio
    audio.play();
});