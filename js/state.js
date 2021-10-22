const MakeGreyPlus = () => {
  const G = new PIXI.Graphics();
  // G.beginFill(0x5d0015);
  const fontSize = Width * s / 10,  
  width = 0.5927 * fontSize;
  const lineWidth = fontSize * 0.04 / window.devicePixelRatio;
  G.lineStyle({
    width: lineWidth,
    color: 0x27AE60,
    // cap: PIXI.LINE_CAP.ROUND,
    miterLimit: 200
  });
  const dash = 2, gap = 6;
  // G.moveTo(0, 0);
  // G.drawDashLine(0, 0, dash, gap);
  // G.drawDashLine(0, fontSize, dash, gap);
  // G.drawDashLine(width, fontSize, dash, gap);
  // G.drawDashLine(70, 200, dash, gap);

  const drawDashLine = (
    G,
    fromX, fromY,
    toX, toY,
    dash = lineWidth,
    gap = lineWidth / 2
  ) => {
    const dist = Math.sqrt(Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2));
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const segmentsCount = Math.floor(dist / (dash + gap)),
          offset = (dist - dash * segmentsCount - gap * (segmentsCount - 1)) / 2;
    for (let i = 0; i < segmentsCount; ++i) {
      G.moveTo(
        fromX + Math.cos(angle) * Math.min(dist, offset + i * (dash + gap)),
        fromY + Math.sin(angle) * Math.min(dist, offset + i * (dash + gap))
      );
      G.lineTo(
        fromX + Math.cos(angle) * Math.min(dist, offset + (i * (dash + gap) + dash)),
        fromY + Math.sin(angle) * Math.min(dist, offset + (i * (dash + gap) + dash))
      );
    }
  }

  const rx = 1 / 43 * width,
        ry = 1 / 72 * fontSize;
  let cx = 0, cy = 0;
  const M = (x, y) => G.moveTo((cx = x) * rx, (cy = y) * ry);
  const V = (y) => {
    const l = cy > y ? -1 : 1;
    drawDashLine(G, cx * rx, cy * ry - l * lineWidth / 2, (cx) * rx, (cy = y) * ry + l * lineWidth / 2);
  }
  const H = (x) => {
    const l = cx > x ? -1 : 1;
    drawDashLine(G, cx * rx - l * lineWidth / 2, cy * ry, (cx = x) * rx + l * lineWidth / 2, (cy) * ry);
  }
  M(16.4883, 58.582);
  V(45.1875);
  H(2.98828);
  V(35.9414);
  H(16.4883);
  V(22.5469);
  H(25.4883);
  V(35.9414);
  H(39.0234);
  V(45.1875);
  H(25.4883);
    V(58.582);
    H(16.4883);

  /**
   * 
   * <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="
  M14.4883 36.582
  V23.1875
  H0.988281
  V13.9414
  H14.4883
  V0.546875
  H23.4883
  V13.9414
  H37.0234
  V23.1875
  H23.4883
  V36.582
  H14.4883
  Z
</svg>

<svg width="43" height="83" viewBox="0 0 43 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="43" height="83" fill="white"/>
<path d="
M16.4883 58.582
V45.1875
H2.98828
V35.9414
H16.4883
V22.5469
H25.4883
V35.9414
H39.0234
V45.1875
H25.4883
V58.582
H16.4883
Z
" fill="#27AE60"/>
</svg>


   */
  return G;
  /*
      // fill: '#FFD700',
      lineJoin: 'round',
      stroke: '#3D3D3D',
      fontSize: Width * s / 10 - 8 / window.devicePixelRatio * 1.25,
      fontWeight: 'bold',
      strokeThickness: ,
   */
  return new PIXI.Text('+', config.styles.grayPlus);
}

let state = {
  startText: 0,
  shRealSize: PIXI.TextMetrics.measureText('Ш', config.styles.sh),
  plusRealSize: PIXI.TextMetrics.measureText('+', config.styles.greenPlus),

  scoreObject: new PIXI.Text('0', config.styles.score),
  sh: new PIXI.Text('Ш', config.styles.sh),
  greyPlus: MakeGreyPlus(),
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
    falling: 1200,
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

function openMenu(open) {
  let scoreBackground = document.getElementById("addBackground");
  let menu = document.getElementById("MenuBackground");
  let gameOverText = document.getElementById("GameOverText");
  let gameOverShText = document.getElementById("GameOverShText");
  let gameOverShScore = document.getElementById("GameOverShScore");
  scoreBackground.style.display = open ? "block" : "none";
  gameOverText.style.display = open ? "block" : "none";
  gameOverShScore.style.display = open ? "block" : "none";
  gameOverShText.style.display = open ? "block" : "none";
  menu.style.display = open ? "block" : "none";
}

function CreateFallingPlus() {
  if (!state.stop) {
    const newPlus = new PIXI.Text('+', config.styles.greenPlus);
    state.pluses.falling.push(newPlus);
    createPlus(newPlus);
    // setTimeout(CreateFallingPlus, state.intervalOfFallingPluses.falling);
  }
}

function FallingPlusCreater() {
  const now = Date.now();
  if (now - state.intervalOfFallingPluses.lastCreated >= state.intervalOfFallingPluses.falling) {
    CreateFallingPlus();
    state.intervalOfFallingPluses.lastCreated = now;
  }
}

function initialization() {
  openMenu(false)
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
    greyPlus: MakeGreyPlus(),
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
      lastCreated: 0,
      falling: 1200,
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
  // CreateFallingPlus();
}