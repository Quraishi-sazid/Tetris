const canvas=document.getElementById("tetris");
const context = canvas.getContext('2d');
scaleHeight=20;
scaleWidth=20;
context.scale(scaleHeight,scaleWidth);
context.fillStyle= '#000';
context.fillRect(0,0,canvas.width,canvas.height);
var row=20;
var col=20;
var limit=380;
var tileWidth=canvas.width/scaleWidth;
var tileHeight=canvas.height/scaleHeight;

flag = [];
for (i=0;i<canvas.height/sc;i++)
{
  flag.push(new Array(canvas.width/5).fill(0));
}

//console.table(flag);

/*for (i=0;i<canvas.height-10;i++)
{
  for (j=0;j<canvas.width-10;j++)
  {
      context.fillStyle='red';
      context.fillRect(j,i,
                       1,1);
  }
}*/

console.log(tileWidth);
console.log(tileHeight);
const matrix = [
      [0,1,0],
      [1,1,1],
      [0,0,0],
];
var i=0;
var j=0;
var k=0;

function drawMatrix(matrix, offset)
{
  for (i=0;i<3;i++)
  {
    for (j=0;j<3;j++)
    {
      if (matrix[i][j]!=0)
      {
        context.fillStyle='red';
        context.fillRect(j + offset.x,
                         i + offset.y,
                         1,1);
      }
    }
  }
}
const player = {
  pos:{x:5,y:0},
  matrix:matrix,
  left:scaleWidth*5,
  right:scaleWidth*8,
  down:scaleHeight*2,
}

console.log(player.left);
console.log(player.right);
console.log(player.down);


function draw()
{
  context.fillStyle= '#000';
  context.fillRect(0,0,canvas.width,canvas.height);
  drawMatrix(player.matrix,player.pos);
  //player.pos.y=player.pos.y+1;
}
function calculate()
{w=canvas.width;
  h=canvas.height;

  for (i=0;i<3;i++)
  {
    for (j=0;j<3;j++)
    {
      console.log(matrix[i][j]);
    }
  }


}
calculate();
function playerdrop()
{
  player.down+=scaleHeight;
  droptime=0;
  player.pos.y++;
}
lasttime=0;
droptime=0;
interval=1000;
function update(time=0)
{
  deltatime=time-lasttime;
  lasttime=time;
  droptime+=deltatime;
  if (droptime>=interval)
  {
    console.log(player.down);
    playerdrop();
  }
//  console.log(time);

  draw();

  requestAnimationFrame(update);
}
update();
//setInterval(draw,1000);
document.addEventListener('keydown', event =>{
  if (event.keyCode==37)
  {
    player.pos.x--;
  }
  else if (event.keyCode==39)
  {
    player.pos.x++;
  }
  else if (event.keyCode==40) {
    playerdrop();
  }

});

function createMat(w,h)
{
  var mat= [];
  for (i=0;i<h;i++)
  {
    mat.push(new Array(w).fill(0));
  }
  return mat;
}

const arena=createMat(12,20);
//console.log(arena);
//console.table(arena);

function merge()
{
  for (i=0;i<3;i++)
  {
    for (j=0;j<3;j++)
    {
      console.log(i);
      if (player.matrix[i][j]==1)
      {
        arena[i+player.pos.y][j+player.pos.y]=1;
      }
    }
  }
}
//merge();


//console.log(arena);
//console.table(arena);
//document.write(k);

//document.write(k);
