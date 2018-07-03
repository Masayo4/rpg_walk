var img =new Image();
img.src ="walk.gif";
var x =0;
var y =140;

function draw(){
var ctx =document.getElementById('map').getContext('2d');
ctx.clearRect(0,0,700,700);
ctx.drawImage(img,x,y,10,10);
console.log(x);
console.log(y);
musicPlay();
}



document.onkeydown = function direct(e){
  var key_code = e.keyCode;
  if (key_code==37) {
    left();
  }
  else if (key_code ==38) {
    up();
  }

  else if (key_code==39) {
    right();
  }
  else if (key_code==40) {
    down();
  }
}




function up(){
  if(y <=0){
    y =0
  }
  else {
    y =y -10;
    draw();
  }
}

function left(){
  if (x <=0) {
    x =0;
  }
  else {
    x =x -10;
    draw();
  }
}

function down(){
  if (y >=140) {
    y =140;
  }
  else {
  y =y +10;
  draw();
}
}

function right(){
  if (x >=290) {
    x =290;
  }
  else {
  x =x +10;
  draw();
}
}


function musicPlay(){
    document.getElementById("music").play();
}
