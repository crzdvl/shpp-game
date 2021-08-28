let state = {
  startText: 0,
  shRealSize: PIXI.TextMetrics.measureText('Ш', config.styles.sh),
  plusRealSize: PIXI.TextMetrics.measureText('+', config.styles.greenPlus),
  scoreObject: new PIXI.Text('0', config.styles.score),
  sh: new PIXI.Text('Ш', config.styles.sh),
  greyPlus: new PIXI.Text('+', config.styles.grayPlus),
  fontSize: Width / 10,
  deadPlus: {
    value: 0,
  }, // number dead plus
  deadGoldPlus: {
    value: 0,
  }, // number dead gold plus
  canAnimTransform: false, // start anim gold plus
  pushPlusNextSh: false, // start push plus next sh
  rightPressed: false, // if right arrow pressed
  leftPressed: false, // if left arrow pressed
  difficult: 0, // levels of difficulty
  replic: 0, // replics counter
  stop: false, // stop game
  gravity: 0,
  intervalOfFallingPluses: {
    falling: 700,
  },
  plusFell: true, // if plus fell
  timeWhenFunctionsDone: 0,
  timeNow: 0,
  score: 0,
  scoreSpeed: 0,
  scoreAnimSwitch: false,
  scoreAnimDo: false,
  scoreColorAlpha: 1,
  scoreAnimRemoveVariables: false,
  catchedGoldPluses: 0, // how many gold pluses
  allGoldCatched: true,
  pluses: {
    falling: [],
    caughtPluses: [], // caught pluses
    boom: [], // grey boom pluses
    Transform: [], // pluses which used to anim gold plus
    gold: [],
  },
  shSizes: {
    x: 0,
    y: 0,
    h: 0,
    w: 0,
  },

};
function initialization() {
  for (let i = 0; i < state.pluses.boom.length; i++) {
    app.stage.removeChild(state.pluses.boom[i]);
  }
  app.stage.removeChild(state.sh);
  app.stage.removeChild(state.greyPlus);
  app.stage.removeChild(state.scoreObject);
  for (let i = 0; i < state.pluses.falling.length; i++) {
    app.stage.removeChild(state.pluses.falling[i]);
  }
  for (let i = 0; i < state.pluses.caughtPluses.length; i++) {
    app.stage.removeChild(state.pluses.caughtPluses[i]);
  }
  for (let i = 0; i < state.pluses.Transform.length; i++) {
    app.stage.removeChild(state.pluses.Transform[i]);
  }
  for (let i = 0; i < state.pluses.gold.length; i++) {
    app.stage.removeChild(state.pluses.gold[i]);
  }

  state = {
    shRealSize: PIXI.TextMetrics.measureText('Ш', config.styles.sh),
    plusRealSize: PIXI.TextMetrics.measureText('+', config.styles.greenPlus),
    scoreObject: new PIXI.Text('0', config.styles.score),
    sh: new PIXI.Text('Ш', config.styles.sh),
    greyPlus: new PIXI.Text('+', config.styles.grayPlus),
    fontSize: Width / 10,
    deadPlus: {
      value: 0,
    }, // number dead plus
    deadGoldPlus: {
      value: 0,
    }, // number dead gold plus
    canAnimTransform: false, // start anim gold plus
    pushPlusNextSh: false, // start push plus next sh
    rightPressed: false, // if right arrow pressed
    leftPressed: false, // if left arrow pressed
    difficult: 0, // levels of difficulty
    stop: false, // stop game
    gravity: 0,
    intervalOfFallingPluses: {
      falling: 700,
    },
    plusFell: true, // if plus fell
    timeWhenFunctionsDone: 0,
    timeNow: 0,
    score: 0,
    scoreSpeed: 0,
    scoreAnimSwitch: false,
    scoreAnimDo: false,
    scoreColorAlpha: 1,
    scoreAnimRemoveVariables: false,
    catchedGoldPluses: 0, // how many gold pluses
    allGoldCatched: true,
    pluses: {
      falling: [],
      caughtPluses: [], // caught pluses
      boom: [], // grey boom pluses
      Transform: [], // pluses which used to anim gold plus
      gold: [],
    },
    shSizes: {
      x: 0,
      y: 0,
      h: 0,
      w: 0,
    },
  };
  state.stop = false;
  state.greyPlus.shag = {};
  state.greyPlus.shag.x = Math.floor(Math.random() * (config.sizesForRandom.x));
  state.greyPlus.shag.y = Math.floor(Math.random() * (config.sizesForRandom.y));
  state.greyPlus.rotationStep = Math.random() * config.rotationRandomizer;
  state.sh.x = config.shStartXPosition;
  state.sh.y = innerHeight - state.shRealSize.height;
  state.sh.shag = {};
  state.sh.shag.x = Math.floor(Math.random() * (config.sizesForRandom.x));
  state.sh.shag.y = Math.floor(Math.random() * (config.sizesForRandom.y));
  state.sh.angle = 0;
  state.sh.rotationStep = Math.random() * config.rotationRandomizer;
  state.scoreObject.x = config.scorePositionX;
  document.body.appendChild(app.view);
  app.stage.addChild(state.scoreObject);
  app.stage.addChild(state.sh);
  app.stage.addChild(state.greyPlus);
  state.startGame = true;
}
