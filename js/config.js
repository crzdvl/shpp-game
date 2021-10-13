let s = 1;
// if (Width * window.devicePixelRatio <= 800)
//   s = 2;
// else s = 1;

const config = {
  // replics: {
  //   start: [
  //     'Здравствуй!',
  //     'Кажется ты ::нашёл нечто скрытое',
  //     'Для управления пользуйся стрелочками',
  //     'Поехали!',
  //     '3',
  //     '2',
  //     '1',
  //   ],
  // },
  rotationRandomizer: (0.025 - 0.018) + 0.018, // random speed rotate plus
  animGoldPlusSpeed: Width * s / 280, // speed anim
  catchedPlusesDist: (Width * s / 10) / 1.8,
  greyDist: (Width * s / 10) / 2.8, // dist between sh and grey plua
  gravity: 0.4,
  fallingPlusesSpeed: (Width * s / 250),
  shStartXPosition: Width * s / 2 - (Width * s / 10) / 2,
  shSpeed: Math.floor((Width * s / 10) * 0.2),
  scorePositionX: Width * s - Width * s / 10,
  minSpeed: Width * s / 230, // speed falin pluses
  centerOfDisplay: {
    x: Width * s / 2,
    y: innerHeight / 2,
  },
  sizesForSpeedRandom: { // random speed
    y: (Width * s / 290) - (Width * s / 230),
  },
  sizesForRandom: { // blast random
    x: 15 - (-15) + 1 - 15,
    y: -12 - 17,
  },
  styles: { // objects styles ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    greenPlus: new PIXI.TextStyle({
      fill: '#27AE60',
      lineJoin: 'round',
      stroke: '#27AE60',
      fontSize: Width * s / 10,
      strokeThickness: 8 / window.devicePixelRatio,
    }),

    grayPlus: new PIXI.TextStyle({
      fill: '#3D3D3D',
      lineJoin: 'round',
      stroke: '#3D3D3D',
      fontSize: Width * s / 10,
      strokeThickness: 8 / window.devicePixelRatio,
    }),

    goldPlus: new PIXI.TextStyle({
      fill: '#FFD700',
      stroke: '#FFD700',
      lineJoin: 'round',
      fontSize: Width * s / 10,
      strokeThickness: 8 / window.devicePixelRatio,
    }),

    sh: new PIXI.TextStyle({
      fill: '#000000',
      lineJoin: 'round',
      fontSize: Width * s / 10,
      strokeThickness: 8 / window.devicePixelRatio,
      stroke: '#000000'
    }),

    score: new PIXI.TextStyle({
      fill: '#27AE60',
      fontSize: Width * s / 15,
      lineJoin: 'round',
      stroke: '#27AE60',
      strokeThickness: 8 / window.devicePixelRatio,
    }),
  },
};
