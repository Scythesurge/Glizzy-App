const hotdogImage = document.getElementById('hotdogImage');
const glizzyButton = document.getElementById('glizzyButton');
const glizzyAudio = document.getElementById('glizzyAudio');
const caption = document.getElementById('caption');

const hotdogs = [
  'assets/hotdog_1.png',
  'assets/hotdog_2.png',
  'assets/hotdog_3.png',
  'assets/hotdog_4.png',
  'assets/hotdog_5.png',
  'assets/hotdog_6.png'
];

const captions = [
  'glizzy deployed.',
  'portable sausage event triggered.',
  'the dog has been randomized.',
  'behold. another glizzy.',
  'snack fate has chosen.'
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

glizzyButton.addEventListener('click', async () => {
  hotdogImage.src = randomItem(hotdogs) + `?t=${Date.now()}`;
  caption.textContent = randomItem(captions);

  try {
    glizzyAudio.currentTime = 0;
    await glizzyAudio.play();
  } catch (err) {
    caption.textContent = 'audio blocked. tap again, coward browser.';
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
