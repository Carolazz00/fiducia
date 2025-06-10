let grafiche = [];
let lettere=[]

/** @type {Font} */
let font;

// 角度
let angle1 = 0;
let angle2 = 0;

// 速度
let speed1 = 0.01; // 速度1
let speed2 = 0.03; // 速度2

function preload() {
  grafiche = [
    // 1
  
    
    
     {
      posizione: {
        riga: 1,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/C-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/C-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/C-3.svg"),
        angolo: 2,
      },
    },
    //2
     {
      posizione: {
        riga: 2,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/D-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/D-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/D-3.svg"),
        angolo: 2,
      },
    },
    
   
    //3
    
     {
      posizione: {
        riga: 3,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/D-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/D-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/D-3.svg"),
        angolo: 2,
      },
    },
    //4
    {
      posizione: {
        riga: 4,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/D-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/D-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/D-3.svg"),
        angolo: 2,
      },
    },
    {
      posizione: {
        riga: 4,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/B-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/B-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/B-3.svg"),
        angolo: 2,
      },
    },
     
    
  ];

  font = loadFont("./fonts/EMOLAND Regular(1).ttf");
}

function setup() {
  createCanvas(400, 500, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  let lettere = [
  { char: "F", riga: 1,colonna: 1},
  { char: "I", riga: 1,colonna: 2},
  { char: "D", riga: 2,colonna: 2},
  { char: "U", riga: 2,colonna: 3 },
  { char: "C", riga: 3,colonna: 1 },
  { char: "I", riga: 3,colonna: 2 },
  { char: "A", riga: 4,colonna: 3 },
];
  clear();
  background("white");

  angle1 += speed1;
  angle2 += speed2;

  textFont(font);
  textSize(80); // 可根据需要调整大小
  fill("green");
  textAlign(CENTER, CENTER);

  // 绘制字母
  for (let lettera of lettere) {
    let x = lettera.colonna * 100;
    let y = lettera.riga * 100;
    text(lettera.char, x, y);
  }

  // 绘制图形
  for (let grafica of grafiche) {
    disegnaGrafica(grafica);
  }
}


function disegnaGrafica(grafica) {
  let x = grafica.posizione.colonna * 100;
  let y = grafica.posizione.riga * 100;

  push();
  translate(x, y);
  rotate(angle1 * grafica.sotto.angolo);
  image(grafica.sotto.svg, 0, 0, 120, 120);
  pop();

  push();
  translate(x, y);
  rotate(angle1 * grafica.centro.angolo);
  image(grafica.centro.svg, 0, 0, 120, 120);
  pop();

  push();
  translate(x, y);
  rotate(angle1 * grafica.sopra.angolo);
  image(grafica.sopra.svg, 0, 0, 120, 120);
  pop();

   
}
 