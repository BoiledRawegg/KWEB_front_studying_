
const ROW_MAX = 6;
const ROW_MIN = 0;
const COL_MAX = 7;
const COL_MIN = 0;
const currPos = {
    row: 5,
    col: 0,
};

const getElementByPosition = (pos) => {
    const cells = document.getElementsByClassName('cells')[pos.row];
    return cells.getElementsByClassName('cell')[pos.col];
};

const getNewPositionByKey = (key) => {
    const newPosition= {
        row: currPos.row,
        col: currPos.col,
    };
    switch(key){
        case 'ArrowUp': newPosition.row--; break;
        case 'ArrowDown': newPosition.row++; break;
        case 'ArrowRight': newPosition.col++; break;
        case 'ArrowLeft': newPosition.col--; break;
    }
    return newPosition;
};

const isPositionInRange = (pos) => {
    return (pos.row>=ROW_MIN && pos.row<=ROW_MAX && pos.col>=COL_MIN && pos.col<=COL_MAX);
};

const isPositionWall = (pos) => {
    return (getElementByPosition(pos).classList.contains('wall'));
};

document.addEventListener('keyup', event => {
    getElementByPosition(currPos).classList.remove('current');
    const newPos = getNewPositionByKey(event.code);
    if (isPositionInRange(newPos) && !isPositionWall(newPos)){
        currPos.row = newPos.row;
        currPos.col = newPos.col;
    }
    const newCell = getElementByPosition(currPos);
    newCell.classList.add('current');
    if  (newCell.classList.contains('target')){
        alert('You escaped!');
    }
});