var canvas,ctx,vRain;
var music = new Audio();
music.src = "https://www.epidemicsound.com/track/ubufZpdEMA/";
// Rain

class Rain{
  constructor(x, y, l, v){
    this.x = x;
    this.y = y;
    this.l = l;
    this.vy = v;
  }
  show(){
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.l);
    ctx.stroke();
  }
  fall(){
    this.y += this.vy;
    if(this.y>canvas.height){
      this.x = Math.floor(Math.random()*canvas.width)+5;
      this.y = Math.floor(Math.random()*100)-100;
      this.l = Math.floor(Math.random()*30)+1;
      this.vy = Math.floor(Math.random()*12)+4;
    }
  }
}

// LOOP
function loop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < vRain.length; i++){
    vRain[i].show();
    vRain[i].fall();
  }
}
//resize
function init(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
// SETUP
function setup(){
canvas = document.getElementById('c')
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
vRain = [];
for(var i = 0; i < 200; i++){
  vRain[i] = new Rain(
    Math.floor(Math.random()*canvas.width)+5,
    Math.floor(Math.random()*100)-100,
    Math.floor(Math.random()*30)+1,
    Math.floor(Math.random()*12)+4
  );
}
window.addEventListener('resize', init, false);
setInterval(loop, 10);
}