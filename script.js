const flashlight = document.getElementById('flashlight');
const toggleBtn = document.getElementById('toggleFlashlight');

let isOn = false;

document.addEventListener('mousemove', (e) => {
  if (isOn) {
    flashlight.style.left = `${e.clientX - 100}px`;
    flashlight.style.top = `${e.clientY - 100}px`;
  }
});

toggleBtn.addEventListener('click', () => {
  isOn = !isOn;
  flashlight.style.opacity = isOn ? '1' : '0';
});
