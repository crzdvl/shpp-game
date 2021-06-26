const app = new PIXI.Application({
            backgroundAlpha: 0,
            width: innerWidth,
            height: innerHeight - 4,
        })
console.log(app);
app.renderer.view.style.position = "absolute"
let Width = innerWidth, H;
function onResize() {
    //Width = window.innerWidth * window.devicePixelRatio;
    H = window.innerHeight * window.devicePixelRatio;
}
onResize();
window.addEventListener('resize', onResize);
