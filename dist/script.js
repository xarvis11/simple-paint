var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 10;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)

  return !isNaN(value);
}

function setWidth (value) {
 //var canvas = document.getElementById("canvas1");
  if(isNumeric(value)){
    paintcanvas.width = value;
  }
  else {
    alert("Please enter numeric value");
    var w1 = document.getElementById("w1");
    w1.value = '';
  }
}

function setHeight (value) {
  // var canvas = document.getElementById("canvas1");
  if(isNumeric(value)){
    paintcanvas.height = value;
  }
  else {
    alert("Please enter numeric value");
    var h1 = document.getElementById("h1");
    h1.value = '';
  }
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}


function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x,y){
  if(isPainting){
    paintCircle(x,y);
  }
}

function changeColor(newColor){
  color = newColor;
  alert('changed');
}

function resizeBrush(newSize){
  radius = newSize;
document.getElementById("sizeOutput").value = newSize;
}
