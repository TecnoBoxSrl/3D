const root = document.documentElement;
const cup = document.querySelector('#cup');
const brandText = document.querySelector('#brandText');
const printText = document.querySelector('#printText');
const printSubtext = document.querySelector('#printSubtext');
const size = document.querySelector('#size');
const wallType = document.querySelector('#wallType');
const finish = document.querySelector('#finish');

function updatePreview() {
  printText.textContent = brandText.value || 'YOUR LOGO';
  printSubtext.textContent = `${wallType.options[wallType.selectedIndex].text} • ${size.value}`;
  cup.classList.toggle('is-matt', finish.value === 'matt');
}

document.querySelector('#cupColor').addEventListener('input', event => {
  root.style.setProperty('--paper', event.target.value);
});

document.querySelector('#printColor').addEventListener('input', event => {
  root.style.setProperty('--print', event.target.value);
});

[brandText, size, wallType, finish].forEach(control => control.addEventListener('input', updatePreview));

let rotation = -22;
document.querySelector('.preview-stage').addEventListener('mousemove', event => {
  const bounds = event.currentTarget.getBoundingClientRect();
  rotation = ((event.clientX - bounds.left) / bounds.width - 0.5) * 48;
  cup.style.transform = `rotateX(7deg) rotateY(${rotation}deg)`;
});

document.querySelector('.preview-stage').addEventListener('mouseleave', () => {
  cup.style.transform = 'rotateX(7deg) rotateY(-22deg)';
});

updatePreview();
