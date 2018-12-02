let amount = document.getElementById('amount')
let percent = document.getElementById('percent')
let calculate = document.getElementById('calculate');
let tip = document.getElementById('tip')
let total = document.getElementById('total')

function calcAndUpdate() {
    // tip.innerHTML = amount * Math.floor(percent/100);
    // total.innerHTML = amount + Math.floor(percent/100);
    let tipz = (amount.value * (percent.value/100));
    tip.innerHTML = Number(tipz);
    // tip.innerHTML = Math.floor(amount.value * (percent.value/100))
    totalz = Number(amount.value) + Number(tipz);
    total.innerHTML = totalz;
};


calculate.addEventListener("click", function() {
    calcAndUpdate();
});
