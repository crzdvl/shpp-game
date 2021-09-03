const config = {
  replics: {
    start: [
      'Здравствуй!',
      'Кажется ты ::нашёл нечто скрытое',
      'Для управления пользуйся стрелочками',
      'Поехали!',
      '3',
      '2',
      '1',
    ],
  },
  rotationRandomizer: (0.025 - 0.018) + 0.018, // random speed rotate plus
  animGoldPlusSpeed: Width / 280, // speed anim
  catchedPlusesDist: (Width / 10) / 1.5,
  greyDist: (Width / 10) / 2.5, // dist between sh and grey plua
  gravity: 0.4,
  fallingPlusesSpeed: (Width / 250),
  shStartXPosition: Width / 2 - (Width / 10) / 2,
  shSpeed: Math.floor((Width / 10) * 0.2),
  scorePositionX: Width - Width / 10,
  minSpeed: Width / 230, // speed falin pluses
  centerOfDisplay: {
    x: Width / 2,
    y: innerHeight / 2,
  },
  sizesForSpeedRandom: { // random speed
    y: (Width / 290) - (Width / 230),
  },
  sizesForRandom: { // blast random
    x: 15 - (-15) + 1 - 15,
    y: -12 - 17,
  },
  styles: { // objects styles ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    greenPlus: new PIXI.TextStyle({
      fill: 'green',
      lineJoin: 'round',
      stroke: 'green',
      fontSize: Width / 10,
      strokeThickness: 4,
    }),

    grayPlus: new PIXI.TextStyle({
      fill: 'gray',
      lineJoin: 'round',
      fontSize: Width / 10,
      strokeThickness: 4,
    }),

    goldPlus: new PIXI.TextStyle({
      fill: 'yellow',
      stroke: 'yellow',
      lineJoin: 'round',
      fontSize: Width / 10,
      strokeThickness: 4,
    }),

    sh: new PIXI.TextStyle({
      fill: 'black',
      lineJoin: 'round',
      fontSize: Width / 10,
      strokeThickness: 4,
    }),

    score: new PIXI.TextStyle({
      fill: 'green',
      fontSize: Width / 15,
      lineJoin: 'round',
      stroke: 'green',
      strokeThickness: 4,
    }),
  },
};