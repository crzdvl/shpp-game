const app = new PIXI.Application({
            backgroundAlpha: 0,
            width: innerWidth,
            height: innerHeight - 4,
            resizeTo: window,
            resolution: 1,
        })
console.log(app);
app.renderer.view.style.position = "absolute"
let Width = innerWidth, H;