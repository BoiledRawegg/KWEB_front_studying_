const isValidNumber = (x) => {
    xnumber = parseInt(x);
    if (isFinite(xnumber) && !isNaN(xnumber)){
        return (1 <= xnumber && xnumber <= 9);
    }
    return false;
};

const getDivisors = (x) => {
    arr = [];
    for(let i = 1; i <= Math.sqrt(x); i++){
        if (isFinite(x/i) && (x/i)===parseInt(x/i)){
            arr = arr.concat([i, x/i]);
        }
    }
    if (arr[arr.length-1] === arr[arr.length-2]){
        arr.pop();
    }

    arr.sort((first, second) =>{
        return first-second;
    })
    return arr;
};

const ellipse = {
    width: Number,
    height: Number,
    getArea: function() {
        return Math.PI*this.width*this.height;
    },
    getPerimeter: function(){
        return 2*Math.PI*(Math.sqrt((this.width**2+this.height**2)/2));
    },
    getEccentricity: function(){
        return Math.sqrt(1-(this.height**2/this.width**2));
    },
};