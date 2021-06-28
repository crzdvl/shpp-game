function GameScore() {
    state.scoreObject.text = state.score
    if(state.scoreAdd) {
        state.score += 1;
    }
    state.scoreAdd = false;
}

function ScoreAnimPlus() {
    if(state.scoreColorAlpha < 1) {
        state.scoreObject.style.fill = 'rgba(0,128,0,' + state.scoreColorAlpha + ')';
        state.scoreColorAlpha += 0.05;
        state.scoreObject.style.stroke = 'rgba(0,128,0,' + state.scoreColorAlpha + ')';

    }
    if(state.scoreObject.y >= state.fontSize) {
        state.scoreSpeed = -10;
        state.scoreAnimSwitch = true;

    }
    if(state.gravity < 2) {
        state.scoreObject.y += state.scoreSpeed;
    }

    if(state.scoreAnimSwitch && state.scoreSpeed < 15) {
        state.scoreSpeed += state.gravity;
        state.gravity += 0.04;

    }
}

function ScoreVariablesRemove() {
    if(state.scoreAnimRemoveVariables) {
        state.scoreObject.y = 0;
        state.scoreSpeed = 15;
        state.scoreColorAlpha = 0;
        state.gravity = 0;
        state.scoreObject.style.stroke = 'rgba(0,0,0,0)'
        state.scoreAnimSwitch = false;
        state.scoreAnimRemoveVariables = false;
    }
    ScoreAnimPlus();
}