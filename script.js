// Get the canvas element and its context
var canvas = document.getElementById("waveCanvas");
var context = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 200;

// Get the input elements and their values
var amplitudeInput = document.getElementById("amplitude");
var frequencyInput = document.getElementById("frequency");
var colorInput = document.getElementById("color");

var amplitudeValue = document.getElementById("amplitudeValue");
var frequencyValue = document.getElementById("frequencyValue");

// Set up animation variables
var animationId;
var phase = 0;

// Update the wave properties when the input values change
amplitudeInput.addEventListener("input", function() {
  amplitudeValue.textContent = this.value;
  drawWave();
});

frequencyInput.addEventListener("input", function() {
  frequencyValue.textContent = this.value;
  drawWave();
});

colorInput.addEventListener("input", function() {
  drawWave();
});

// Start the animation when the page loads
window.addEventListener("load", startAnimation);

// Draw the wave with the current properties and phase
function drawWave() {
  var amplitude = amplitudeInput.value;
  var frequency = frequencyInput.value;
  var color = colorInput.value;
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  context.beginPath();
  context.strokeStyle = color;
  for (var x = 0; x <= canvas.width; x++) {
    var y = canvas.height / 2 + amplitude * Math.sin(frequency * (x + phase) * 2 * Math.PI / canvas.width);
    if (x == 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.stroke();
}

// Start the animation loop
function startAnimation() {
  animationId = requestAnimationFrame(animationLoop);
}

// Stop the animation loop
function stopAnimation() {
  cancelAnimationFrame(animationId);
}

// Animation loop
function animationLoop() {
  phase -= 0.1;
  drawWave();
  animationId = requestAnimationFrame(animationLoop);
}

// Call the drawWave function to draw the initial wave
drawWave();
