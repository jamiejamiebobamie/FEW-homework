let amount = document.getElementById('amount')
let percent = document.getElementById('percent')
let calculate = document.getElementById('calculate');
let tip = document.getElementById('tip')
let total = document.getElementById('percent')


function calc() {
    tip = amount * Math.floor(percent/100);
    total = amount + tip;
};

function update() {
    tip.innerHTML = tip.toString;
    total.innerHTML = total.toString;
};


calculate.addEventListener("click", function() {
    calc();
    update();
});
