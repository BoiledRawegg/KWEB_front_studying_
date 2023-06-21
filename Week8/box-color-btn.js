document.querySelector('button').addEventListener('onclick', changeBoxColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.querySelector('.box').nextElementSibling.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});