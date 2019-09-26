var canvas = document.querySelector('.customerMix');
var ctx = canvas.getContext('2d');
var score = [40,20,150];
var width = 50;
var currX = 50;
var base = 200;
ctx.font = "12px Arial";


ctx.fillStyle = '#0074d9';
for(var i = 0 ;i<score.length; i++){
    var column = score[i];
    ctx.fillRect(currX, canvas.height - column, width, column);
    ctx.fillText("20%", 60, 130);
    ctx.fillText("30%", 130, 150);
    ctx.fillText("90%", 200, 20);
    currX += width + 20;
}


var canvas = document.querySelector('.ResponderRate');
var ctx = canvas.getContext('2d');
var score = [160,70,10];
var width = 50;
var currX = 50;
var base = 200;
ctx.font = "12px Arial";

ctx.fillStyle = '#0074d9';
for(var i = 0 ;i<score.length; i++){
    var column = score[i];
    ctx.fillRect(currX, canvas.height - column, width, column);
    ctx.fillText("5%", 200, 160);
    ctx.fillText("70%", 130, 100);
    ctx.fillText("95%", 60, 10);
    currX += width + 20;
}