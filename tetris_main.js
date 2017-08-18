
var canvas = document.getElementById("tetris");
var context=canvas.getContext('2d');
context.fillStyle="black";
context.fillRect(0,0,canvas.width,canvas.height);
scaleHeight=20;
scaleWidth=20;
context.scale(scaleHeight,scaleWidth);
flag=[];
permanent=[];
pre=[];
color=[];
var keyflag=1;
var indicator;
var row=new Array(canvas.height/scaleHeight).fill(0);
function wait(ms){
  /* var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }*/
}

function flagItailize()
{
  for (i=0;i<(canvas.height/scaleHeight)+4;i++)
  {
    flag[i]=new Array((canvas.width/scaleWidth)+4).fill(0);

  }


 for (i=0;i<(canvas.height/scaleHeight)+4;i++)
 {
   for (j=0;j<(canvas.width/scaleWidth)+4;j++)
   {
     if (i>=(canvas.height/scaleHeight) || j>=(canvas.width/scaleWidth))
     {
       flag[i][j]=1;

     }
   }
 }
 }

 function initailize()
 {
   for (i=0;i<(canvas.height/scaleHeight)+4;i++)
   {
     permanent[i]=new Array((canvas.width/scaleWidth)+4).fill(0);
       color[i]=new Array((canvas.width/scaleWidth)+4).fill("black");
       pre[i]=new Array((canvas.width/scaleWidth)+4).fill(0);

   }
   for (i=0;i<(canvas.height/scaleHeight)+4;i++)
  {
    for (j=0;j<(canvas.width/scaleWidth)+4;j++)
    {
      if (i>=(canvas.height/scaleHeight) || j>=(canvas.width/scaleWidth))
      {
        permanent[i][j]=1;
         pre[i][j]=1;
      }
    }
  }
}
  initailize();
  flagItailize();
 //console.table(flag);
  //console.table(permanent);
  var ind=false;
function copy()
{

  for (i=0;i<(canvas.height/scaleHeight)+4;i++)
  {
    for (j=0;j<(canvas.width/scaleWidth)+4;j++)
    {
      if (pre[i][j]!=0)
      {
        permanent[i][j]=2;
        if (i<(canvas.height/scaleHeight) && j<(canvas.width/scaleWidth))
        row[i]++;
        color[i][j]=drawableObject.color;
      }
    }
  }
  console.table(permanent);
}


function jhamela()
{
  for (i=0;i<flag.length;i++)
   {
     for (j=0;j<flag[i].length;j++)
     {
       pre[i][j]=flag[i][j];
     }
   }
}
var q=[];
function rowCheck()
{
  var k=0;
  var f=0;
  for (i=0;i<canvas.height/scaleHeight;i++)
  {
    if (row[i]==canvas.width/scaleWidth)
    {
      q[k]=i;
      k++;
      f=1;
    }
  }
  return f;
}
function clear()
{
  var zz="ready";
//  wait(5000);
  //console.table(permanent);
  var k=0;
  while (k<q.length)
  {
    var x=q[k];
  //  row[x]=0;
    k++;
  //  console.log(x);console.log(x);console.log(x);wait(5000);
    for (i=0;i<canvas.width/scaleWidth;i++)
    {
      for (j=x-1;j>0;j--)
      {
        color[j+1][i]=color[j][i];
        permanent[j+1][i]=permanent[j][i];
      }

    }

    for (i=x-1;i>=0;i--)
    row[i+1]=row[i];
  //  console.log(zz);console.log(zz);console.log(zz);wait(8000);
    console.table(permanent);
  //  wait(20000);
  }
  while (q.length>0)
  {
    var y=q.pop();
  }
//  wait(2000);
  console.log(q);
  var audio = new Audio('blust.wav');
  audio.play();
  wait(2000);
}
//drawings
var up={
  matrix:[
    [0,1,0],
    [1,1,1],
  ],
  addUp:-1,
  addLeft:0,
  color:"red",
}
var down={
  matrix:[
    [1,1,1],
    [0,1,0],
  ],
  addUp:-1,
  addLeft:0,
  color:"blue",
}
var left={
  matrix:[
    [0,1],
    [1,1],
    [0,1],
  ],
  addUp:0,
  addLeft:-1,
  color:"yellow",
}
var right={
  matrix:[
    [1,0],
    [1,1],
    [1,0],
  ],
  addUp:0,
  addLeft:-1,
  color:"green",
}
var verticalBar={
  matrix:[
    [1],
    [1],
    [1],
  ],
  addUp:0,
  addLeft:-1,
  color:"orange",
}
var HorigentalBar={
  matrix:[
    [1,1,1],
  ],
  addUp:-1,
  addLeft:0,
  color:"white",
}

var zigzag={
  matrix:[
    [1,1,0],
    [0,1,1],
  ],
  addUp:-1,
  addLeft:0,
  color:"pink",
}



function drawMatrix(object)
{
  //console.table(color);
  for (i=0;i<object.matrix.length;i++)
  for(j=0;j<object.matrix[i].length;j++)
  {
    if (object.matrix[i][j]==1)
    {
        context.fillStyle=object.color;
        context.fillRect(j+changer.side,i+changer.down,1,1);
    }
  }
}
//drawMatrix(zigzag);

function drawWhole()
{
  for (i=0;i<(canvas.height/scaleHeight);i++)
  {
    for (j=0;j<(canvas.width/scaleWidth);j++)
    {
      context.fillStyle=color[i][j];
      context.fillRect(j,i,1,1);
    }
  }
  //if (ind==true)
  //wait(15000);
  //context.fillStyle="black";
  //context.fillRect(0,0,canvas.width,canvas.height);
  drawMatrix(drawableObject);
}
function again()
{
  changer.side=2;
  changer.down=0;
}


function choose()
{
  //return verticalBar;
  var randi =Math.floor((Math.random() * 7) + 1);;
  if (randi==1)
  return up;
  else if (randi==2) {
    return down;
  }
  else if (randi==2) {
    return down;
  }
  else if (randi==3) {
    return left;
  }
  else if (randi==4) {
    return right;
  }
  else if (randi==5) {
    return verticalBar;
  }
  else if (randi==6) {
    return HorigentalBar;
  }
  else if(randi==7) {
      return zigzag;
}
}
drawableObject= choose();
changer={
  side:2,
  down:0,
}
//drawWhole();
function dropObject()
{
//  console.log(changer.down);
  if (changer.down>0)
  {keyflag=1;
  }
  var over=check();
  if (over==false)
  {
    indicator="NO";
      drawWhole();
      changer.down++;
  }

  else if (over==true)
    {
      if (changer.down<=0)
      {
        var audio = new Audio('gameover.wav');
        audio.play();
        indicator="Game over";
        console.log(indicator);
        location.reload();
      }
      copy();
      var x=rowCheck();
  //    console.log(q);
      //if (q.length!=0)
      if (x==1)
      clear();
      drawableObject=choose();
  //    console.table(permanent);
      again();
    }
    //console.table(flag);
  //  console.table(pre);
    jhamela();
    flagItailize();
}

function check()
{
   overlap=false;
  if (changer.side<0)
  return true;
  if (changer.side>canvas.width/scaleWidth)
  return true;
  for (i=0;i<drawableObject.matrix.length;i++)
  {
    for (j=0;j<drawableObject.matrix[i].length;j++)
    {
      if (drawableObject.matrix[i][j]==1)
      {
        //console.log(i);
        //console.log(i);
        if (permanent[i+changer.down][j+changer.side]!=0)
        {
          overlap=true;
          keyflag=0;
        }
        flag[i+changer.down][j+changer.side]=2;
      }
  }
  //console.table(flag);
}
return overlap;
}

lasttime=0;
deltatime=0;
interval=300;
droptime=0;
function update(time=0)
{
  deltatime=time-lasttime;
  lasttime=time;
  droptime+=deltatime;
  if (droptime>=interval)
  {
    dropObject();
    droptime=0;
  }
  requestAnimationFrame(update);
}
update();
//setInterval(dropObject,300)

document.addEventListener('keydown', change,true);

function change()
{
  var x=changer.side;
  var y=changer.down;
  if (keyflag==1)
  {
    if (event.keyCode==37)
    {
      var audio = new Audio('left.wav');
      audio.play();
      changer.side--;

    }
    else if (event.keyCode==39)
    {
      var audio = new Audio('right.wav');
      audio.play();
      changer.side++
    }
    else if (event.keyCode==40)
    {
      if (permanent[changer.side][changer.down+2]==0)
      changer.down++;
    }
    overlap=check();
    if (overlap==true)
    {
        changer.side=x;
        changer.down=y;
    }
   else {
        flagItailize;
    }
  }
  else {
    var zz="hobe na";
    console.log(zz);
  }
}

//setInterval(dropObject,200);
