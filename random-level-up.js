var possibility = [100, 60, 36, 22, 12, 8, 5, 3, 2, 1];
var level = 0;
var trial = 0;
var wid = 0;

const getRandomBinaryResult = (pos) => {
    return (pos >= Math.random() * 100);
};

const tryLevelUp = () => {
    const pos = possibility[level];
    document.querySelector('#attempts').innerText = `${++trial}`;
    if (getRandomBinaryResult(pos)){
        document.querySelector('#current-level').innerText = `${++level}`;
        document.querySelector('#gauge-bar').style.width = `${wid+=30}px`;
    }
    if (level>=10){
        clearInterval(work);
    }
};

document.querySelector('#start-btn').addEventListener('click', () => {
    work = setInterval(() => {
        tryLevelUp();
    }, 50)});