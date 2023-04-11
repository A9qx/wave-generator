// Get the canvas element and its context
var canvas = document.getElementById("waveCanvas");
var context = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 200;

// Draw the wave
function drawWave(amplitude, frequency, color) {
  context.beginPath();
  context.strokeStyle = color;
  for (var x = 0; x <= canvas.width; x++) {
    var y = canvas.height / 2 + amplitude * Math.sin(frequency * x * 2 * Math.PI / canvas.width);
    if (x == 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.stroke();
}

// Call the drawWave function with different parameters to create different waves
drawWave(50, 1, "red");
drawWave(30, 2, "green");
drawWave(10, 3, "blue");
