document.getElementById('click').addEventListener('click',colorChange);

function colorChange(){
  //console.log("Hello World");
  var color = '#' + Math.random().toString(16).slice(2, 8);
  //console.log(color);
  document.body.style.background = color;
}
