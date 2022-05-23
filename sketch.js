var harry_img,Harry;
var h1_img,h2_img,h3_img,h4_img,h5_img;

var h1,h2,h3,h4,h5;

var life=10;

var ho1_t,ho1_d,ho1_r;
var ho2_d,ho2_l,ho2_r,ho2_t;
var ho3_d,ho3_l,ho3_r,ho3_t;
var ho4_d,ho4_l,ho4_r,ho4_t;
var ho5_d,ho5_l,ho5_r,ho5_t;

var d,d_img;
var b,b_img;

var f,f_img;
var gs,gs_img;

var Voldemort,Voldemort_img;
var bella,bella_img;
var Nagini,Nagini_img;

function preload(){

    harry_img=loadImage("./Images/Harry Potter.jpeg");
    h1_img=loadImage("./Images/Horcrux 1.jpg");
    h2_img=loadImage("./Images/Horcrux 2.jpg");
    h3_img=loadImage("./Images/Horcrux 4.jpg");
    h4_img=loadImage("./Images/Horcrux 5.jpeg");
    h5_img=loadImage("./Images/Horcrux 6.jpg");
    d_img=loadImage("./Images/Dementor.jpeg");
    b_img=loadImage("./Images/Baslisks Fang.jpeg");
    f_img=loadImage("./Images/Fenrirgreyback.jpeg");
    gs_img=loadImage("./Images/GryffindorsSword.jpeg");
    Voldemort_img=loadImage("./Images/Voldemort.jpg");
    bella_img=loadImage("./Images/Bellatrix Lestrange.jpeg");
    Nagini_img=loadImage("./Images/Horcrux 3.jpg");

}

function setup() {
createCanvas(1100,550);




Voldemort=createSprite(800,150,100,100);
Voldemort.addImage("Lord Voldemort",Voldemort_img);
Voldemort.scale=0.1;
Voldemort.velocityX=3;
Voldemort.velocityY=3;

Nagini=createSprite(900,50,100,100);
Nagini.addImage("Nagini",Nagini_img);
Nagini.scale=0.1;
Nagini.velocityX=3;
Nagini.velocityY=3;

bella=createSprite(300,50,100,100);
bella.addImage("Bellatrix Lestrange",bella_img);
bella.scale=0.1;
bella.velocityX=3;
bella.velocityY=3;

Harry=createSprite(550,250,100,100);
Harry.addImage("harry",harry_img);
Harry.scale=0.1;

d=createSprite(100,500,10,10);
d.addImage("dementor",d_img);
d.scale=0.05;
d.velocityX=5;
d.velocityY=-6;


b=createSprite(40,500,10,10);
b.addImage("basilisk fang",b_img);
b.scale=0.05;

f=createSprite(100,50,10,10);
f.addImage("fennirgreyback",f_img);
f.scale=0.1;
f.velocityX=-3;
f.velocityY=3;

gs=createSprite(40,40,10,10);
gs.addImage("GodricGriffindors Sword",gs_img);
gs.scale=0.05;


h1 = createSprite(350,450,10,10);
h1.addImage("Horcrux1",h1_img);
h1.scale=0.1;

h2 = createSprite(50,220,10,10);
h2.addImage("Horcrux2",h2_img);
h2.scale=0.08;

h3 = createSprite(500,150,10,10);
h3.addImage("Horcrux3",h3_img);
h3.scale=0.03;

h4 = createSprite(1000,100,10,10);
h4.addImage("Horcrux4",h4_img);
h4.scale=0.3;

h5 = createSprite(1000,450,10,10);
h5.addImage("Horcrux5",h5_img);
h5.scale=0.2;

 /*var a = createSprite(100,50,10,100);
 a.shapeColor="blue";
 var b = createSprite(250,60,10,130);
 b.shapeColor="blue";
 var c = createSprite(50,400,100,10);
 c.shapeColor="blue";*/

 ho1_t = createSprite(50,170,100,10);
 ho1_t.shapeColor="lightgreen";
 ho1_r = createSprite(100,215,10,100);
 ho1_r.shapeColor="lightgreen";
 ho1_d = createSprite(50,260,100,10);
 ho1_d.shapeColor="lightgreen";
 
 ho2_t = createSprite(350,400,110,10);
 ho2_t.shapeColor="red";
 ho2_l = createSprite(300,455,10,100);
 ho2_l.shapeColor="red";
 ho2_d = createSprite(350,510,110,10);
 ho2_d.shapeColor="red";
 ho2_r = createSprite(400,455,10,100);
 ho2_r.shapeColor="red";
 

 ho3_t = createSprite(500,100,100,10);
 ho3_t.shapeColor="orange";
 ho3_l = createSprite(450,150,10,110);
 ho3_l.shapeColor="orange";
 ho3_r = createSprite(550,150,10,110);
 ho3_r.shapeColor="orange";
 ho3_d = createSprite(500,200,100,10);
 ho3_d.shapeColor="orange";


 ho4_t = createSprite(1000,400,110,10);
 ho4_t.shapeColor="green";
 ho4_l = createSprite(950,455,10,100);
 ho4_l.shapeColor="green";
 ho4_r = createSprite(1050,455,10,100);
 ho4_r.shapeColor="green";
 ho4_d=createSprite(1000,510,110,10);
 ho4_d.shapeColor="green";

 ho5_t = createSprite(1000,50,110,10);
 ho5_t.shapeColor="purple";
 ho5_l = createSprite(950,105,10,100);
 ho5_l.shapeColor="purple";
 ho5_r = createSprite(1050,105,10,100);
 ho5_r.shapeColor="purple";
 ho5_d = createSprite(1000,150,110,10);
 ho5_d.shapeColor="purple";





 



//createEdgeSprites();
}


function draw(){
 background("black");

 fill("White");
 text("Life: "+life,1000,30);

 var edges=createEdgeSprites();
 Harry.bounceOff(edges);
 d.bounceOff(edges);
 f.bounceOff(edges);
 Voldemort.bounceOff(edges);
 Nagini.bounceOff(edges);
 bella.bounceOff(edges);

 Harry.bounceOff(ho1_d);
 Harry.bounceOff(ho1_t);
 Harry.bounceOff(ho1_r);
 d.bounceOff(ho1_d);
 d.bounceOff(ho1_t);
 d.bounceOff(ho1_r);
 f.bounceOff(ho1_d);
 f.bounceOff(ho1_t);
 f.bounceOff(ho1_r);
 Voldemort.bounceOff(ho1_d);
 Voldemort.bounceOff(ho1_t);
 Voldemort.bounceOff(ho1_r);
 Nagini.bounceOff(ho1_d);
 Nagini.bounceOff(ho1_t);
 Nagini.bounceOff(ho1_r);
 bella.bounceOff(ho1_d);
 bella.bounceOff(ho1_t);
 bella.bounceOff(ho1_r);

 Harry.bounceOff(ho2_d);
 Harry.bounceOff(ho2_l);
 Harry.bounceOff(ho2_t);
 Harry.bounceOff(ho2_r);
 d.bounceOff(ho2_d);
 d.bounceOff(ho2_l);
 d.bounceOff(ho2_t);
 d.bounceOff(ho2_r);
 f.bounceOff(ho2_d);
 f.bounceOff(ho2_l);
 f.bounceOff(ho2_t);
 f.bounceOff(ho2_r);
 Voldemort.bounceOff(ho2_d);
 Voldemort.bounceOff(ho2_l);
 Voldemort.bounceOff(ho2_t);
 Voldemort.bounceOff(ho2_r);
 Nagini.bounceOff(ho2_d);
 Nagini.bounceOff(ho2_l);
 Nagini.bounceOff(ho2_t);
 Nagini.bounceOff(ho2_r);
 bella.bounceOff(ho2_d);
 bella.bounceOff(ho2_l);
 bella.bounceOff(ho2_t);
 bella.bounceOff(ho2_r);

 Harry.bounceOff(ho3_r);
 Harry.bounceOff(ho3_t);
 Harry.bounceOff(ho3_l);
 Harry.bounceOff(ho3_d);
 d.bounceOff(ho3_r);
 d.bounceOff(ho3_t);
 d.bounceOff(ho3_l);
 d.bounceOff(ho3_d);
 f.bounceOff(ho3_r);
 f.bounceOff(ho3_t);
 f.bounceOff(ho3_l);
 f.bounceOff(ho3_d);
 Voldemort.bounceOff(ho3_d);
 Voldemort.bounceOff(ho3_l);
 Voldemort.bounceOff(ho3_t);
 Voldemort.bounceOff(ho3_r);
 Nagini.bounceOff(ho3_d);
 Nagini.bounceOff(ho3_l);
 Nagini.bounceOff(ho3_t);
 Nagini.bounceOff(ho3_r);
 bella.bounceOff(ho3_d);
 bella.bounceOff(ho3_l);
 bella.bounceOff(ho3_t);
 bella.bounceOff(ho3_r);

 Harry.bounceOff(ho4_t);
 Harry.bounceOff(ho4_r);
 Harry.bounceOff(ho4_d);
 Harry.bounceOff(ho4_l);
 d.bounceOff(ho4_t);
 d.bounceOff(ho4_r);
 d.bounceOff(ho4_d);
 d.bounceOff(ho4_l);
 f.bounceOff(ho4_t);
 f.bounceOff(ho4_r);
 f.bounceOff(ho4_d);
 f.bounceOff(ho4_l);
 Voldemort.bounceOff(ho4_d);
 Voldemort.bounceOff(ho4_l);
 Voldemort.bounceOff(ho4_t);
 Voldemort.bounceOff(ho4_r);
 Nagini.bounceOff(ho4_d);
 Nagini.bounceOff(ho4_l);
 Nagini.bounceOff(ho4_t);
 Nagini.bounceOff(ho4_r);
 bella.bounceOff(ho4_d);
 bella.bounceOff(ho4_l);
 bella.bounceOff(ho4_t);
 bella.bounceOff(ho4_r);

 Harry.bounceOff(ho5_t);
 Harry.bounceOff(ho5_r);
 Harry.bounceOff(ho5_d);
 Harry.bounceOff(ho5_l);
 d.bounceOff(ho5_t);
 d.bounceOff(ho5_r);
 d.bounceOff(ho5_d);
 d.bounceOff(ho5_l);
 f.bounceOff(ho5_t);
 f.bounceOff(ho5_r);
 f.bounceOff(ho5_d);
 f.bounceOff(ho5_l);
 Voldemort.bounceOff(ho5_d);
 Voldemort.bounceOff(ho5_l);
 Voldemort.bounceOff(ho5_t);
 Voldemort.bounceOff(ho5_r);
 Nagini.bounceOff(ho5_d);
 Nagini.bounceOff(ho5_l);
 Nagini.bounceOff(ho5_t);
 Nagini.bounceOff(ho5_r);
 bella.bounceOff(ho5_d);
 bella.bounceOff(ho5_l);
 bella.bounceOff(ho5_t);
 bella.bounceOff(ho5_r);
 
 if(keyDown(UP_ARROW)){
    Harry.y=Harry.y-4;
}

if(keyDown(DOWN_ARROW)){
    Harry.y=Harry.y+4;
}

if(keyDown(LEFT_ARROW)){
    Harry.x=Harry.x-4;
}

if(keyDown(RIGHT_ARROW)){
    Harry.x=Harry.x+4 ;
}

if(Harry.isTouching(b)){
    ho3_t.destroy();
    ho4_t.destroy();
    ho5_t.destroy();
    b.destroy();
}

if(Harry.isTouching(gs)){
    ho1_t.destroy();
    ho2_t.destroy();
    gs.destroy();
}

if(Harry.isTouching(h1)){
    h1.destroy();
}

if(Harry.isTouching(h2)){
    h2.destroy();
}

if(Harry.isTouching(h3)){
    h3.destroy();
}

if(Harry.isTouching(h5)){
    h5.destroy();
}

if(Harry.isTouching(h4)){
    h4.destroy();
}

if(Harry.isTouching(d)){
    Harry.x=550;
    Harry.y=250;
    life=life-1;
}

if(Harry.isTouching(f)){
    Harry.x=550;
    Harry.y=250;
    life=life-1;
}

if(Harry.isTouching(bella)){
    Harry.x=550;
    Harry.y=250;
    life=life-1;
}

if(Harry.isTouching(Voldemort)){
    Harry.x=550;
    Harry.y=250;
    life=life-1;
}

if(Harry.isTouching(Nagini)){
    Nagini.destroy();
}

if(life<=0){
    textSize(25)
    text("Harry Lost The Fight Against Voldemort",400,250);
    Harry.destroy();
    Voldemort.destroy();
    bella.destroy();
    d.destroy();
    f.destroy();
}




 drawSprites();

}