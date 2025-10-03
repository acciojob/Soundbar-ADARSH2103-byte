//your JS code here. If required.

// List of sounds (files must exist in /sounds folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsDiv = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    audio.play();
    document.body.appendChild(audio);
  });

  buttonsDiv.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopSounds);

buttonsDiv.appendChild(stopBtn);

// Function to stop all playing sounds
function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
    audio.remove(); // remove audio elements from DOM
  });
}