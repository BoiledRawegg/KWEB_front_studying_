
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

/*
const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const currentPos = { row: 5, col: 0 };
const getElementByPosition = pos => {
    const cellsEl = document.getElementsByClassName('cells')[pos.row];
    return cellsEl.getElementsByClassName('cell')[pos.col];
};
const getNewPositionByKey = key => {
    const pos = {
        row: currentPos.row,
        col: currentPos.col,
    }
    switch (key) {
        case 'ArrowUp': pos.row--; break;
        case 'ArrowDown': pos.row++; break;
        case 'ArrowLeft': pos.col--; break;
        case 'ArrowRight': pos.col++; break;
    }
    return pos;
};
const isPositionInRange = pos => (pos.row >= ROW_MIN)
    && (pos.row <= ROW_MAX) && (pos.col >= COL_MIN) && (pos.col <= COL_MAX);
const isPositionWall = pos => getElementByPosition(pos).classList.contains('wall');
document.addEventListener('keyup', event => {
    getElementByPosition(currentPos).classList.remove('current');
    const newPos = getNewPositionByKey(event.code);
    if (isPositionInRange(newPos) && !isPositionWall(newPos)) {
        currentPos.row = newPos.row;
        currentPos.col = newPos.col;
    }
    const newElmt = getElementByPosition(currentPos);
    newElmt.classList.add('current');
    if (newElmt.classList.contains('target')) alert('You escaped!');
});
*/