const app = new PIXI.Application({
  backgroundAlpha: 0,
  width: innerWidth,
  height: innerHeight - 4,
  resizeTo: window,
  resolution: 1,
});

app.renderer.view.style.position = 'absolute';
const Width = innerWidth;
let H;
