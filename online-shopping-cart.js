var valueTag = {
    apple: 700,
    orange: 800,
    lemon: 900,
};
var totalCost = 0;

for(const category of document.querySelectorAll('.add-to-cart')){
        category.addEventListener('click', event => {
            const Item = event.target.parentElement.parentElement.getAttribute('id');
            totalCost += valueTag[Item];
            document.querySelector('#cost').innerText = `${totalCost}`;
        });
}