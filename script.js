const canvas = document.getElementById("wave-canvas");
const ctx = canvas.getContext("2d");

const frequencyInput = document.getElementById("frequency-input");
const amplitudeInput = document.getElementById("amplitude-input");
const speedInput = document.getElementById("speed-input");

let frequency = parseInt(frequencyInput.value);
let amplitude = parseInt(amplitudeInput.value);
let speed = parseInt(speedInput.value);

let xOffset = 0;

function drawWave() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;

  const centerY = canvas.height / 2;
  let angle = 0;

  ctx.beginPath();
  ctx.moveTo(0, centerY);

  for (let x = 0; x < canvas.width; x++) {
    const y = centerY + Math.sin(angle + xOffset) * amplitude;
    ctx.lineTo(x, y);
    angle += (Math.PI * 2 * frequency) / canvas.width;
  }

  ctx.strokeStyle = "blue";
  ctx.stroke();

  xOffset += speed;
  requestAnimationFrame(drawWave);
}

function updateValues() {
  frequency = parseInt(frequencyInput.value);
  amplitude = parseInt(amplitudeInput.value);
  speed = parseInt(speedInput.value);
}

frequencyInput.addEventListener("input", () => {
  updateValues();
});

amplitudeInput.addEventListener("input", () => {
  updateValues();
});

speedInput.addEventListener("input", () => {
  updateValues();
});

drawWave();
