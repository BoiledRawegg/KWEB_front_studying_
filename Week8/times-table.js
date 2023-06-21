const input = document.querySelector('#number');

document.querySelector('button').addEventListener('click', displayTimes = () => {
    const d = parseInt(input.value);
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (isNaN(d) || Math.floor(d) != input.value || d < 1 || d > 9){
        document.querySelector('#times-result').innerText = 'Input Error!';
    }
    else {
    document.querySelector('#times-result').innerText =  num.map(x => `${d} * ${x} = ${d*x}`).join('\n');
    }
});
