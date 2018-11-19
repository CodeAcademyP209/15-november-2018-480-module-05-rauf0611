// BUTTON start

var btnWhite=document.getElementById("btnWhite");
var btnBlue=document.getElementById("btnBlue");
var btnGray=document.getElementById("btnGray");
var btnPink=document.getElementById("btnPink");
var btnYellow=document.getElementById("btnYellow");
var btnRandpm=document.getElementById("btnRandom");
var body =document.querySelector("body");
var webkitTransition= body.style.WebkitTransition = "all 2s";
var transition= body.style.transition = "all 2s";




btnWhite.addEventListener("click", function(){

    body.style.background="white";
    webkitTransition();
   transition();
    
})
btnBlue.addEventListener("click", function(){

    body.style.background="blue";
    webkitTransition();
   transition();
   
})
btnGray.addEventListener("click", function(){

    body.style.background="gray";
    webkitTransition();
    transition();

})
btnPink.addEventListener("click", function(){

    body.style.background="pink";
    webkitTransition();
    transition();

})
btnYellow.addEventListener("click", function(){

    body.style.background="yellow";
    webkitTransition();
    transition();

})
btnRandom.addEventListener("click", function(){

    body.style.background=getRandomColor();
   webkitTransition();
   transition();
    

})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// CLOCK Start


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'gray';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, 'yellow');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'yellow');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.06, 0, 2*Math.PI);
  ctx.fillStyle = 'yellow';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.06);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.04);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}




