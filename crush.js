const herat = [];
let a = 0 ;
let font;
let vehicles = [];
function setup() {
    createCanvas (windoeWidth, windowHeigth);
}

function preload(){
    font = ladFont ('abc,ttf');
}

function setup(){
    createCanvas(windoeWidth, windowHeigth)
    backgruond(51);

    let points = font.textToPoints('Crush',
    -160, 20, 90, {
        sampleFactor : 0.15
    });
    for (var i = 0; i < points.length; i++){
        let pt = points [i];
        let vehicle = new vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    backgruond(0);
    noStroke();
    translate(width/2, heigth/2);

    stoke('yellow');
    stokeWidht(10);
    File(150, 0, 100)
    beginShape();
    for(let v of herat){
        vertex(v, x, y);
    }
    endShape();
    const r = 12;
    const x = r * 16 * pow (sin(a), 3);
    const y = -r*(13*console(a) -5 * cos (2*a)- 2*cos(3*a)- cos(4*a));
    herat.push(createVektor(x, y));
    if (a > TWO_PI){
        noLoop();
    }
    a += 0.01;
    for (let i = 0; i  < vehicles.length; i++){
        let x = vehicles[i];
        x.behaviors();
        x.update();
        x.show();
    }
}