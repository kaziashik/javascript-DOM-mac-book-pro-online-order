
// totalPrice calculation function
function totalcalculation() {
    const TotalPrices = Number(memory8GBCost.innerText) + Number(storageCost.innerText) + Number(deliveryCharge.innerText) + 1299;
    return TotalPrices;
};



// function for total price
function TotalPrice() {
    totalPrices.innerText = totalcalculation();
    finalPrice.innerText = totalcalculation();
};





// function for promo code
function verifyPin() {
    const inputpromoCod = document.getElementById('inputpromoCod');
    if (inputpromoCod.value == 'stevekaku') {
        let discount = totalcalculation() * 0.2;
        finalPrice.innerText = totalcalculation() - discount;
    }
    else {
        alert('Sorry,your promotional code is not valid. Please, try a valid promotional code for 20% discount.')
    }
    inputpromoCod.value = '';
};




/***********************
memory part get
*************************/
const memory8GBbutton = document.getElementById('memory8GBbutton');

const memory16GBbutton = document.getElementById('memory16GBbutton');


// memory price get part
const memory8GBCost = document.getElementById('memory8gb-amount')
const memory16GBCost = document.getElementById('memory16gb-amount')



// memory part addevntlistenar
memory8GBbutton.addEventListener('click', function () {
    memory8GBCost.innerText = 0;
    TotalPrice()
});


memory16GBbutton.addEventListener('click', function () {
    memory8GBCost.innerText = 180;
    TotalPrice()

});



/***********************
storage part get
*************************/
const storage256GB = document.getElementById('storage256GB');

const storage512GB = document.getElementById('storage512GB');

const storage1TB = document.getElementById('storage1TB');


// storage price part get
const storageCost = document.getElementById('storageCost');



// storage price set after click

storage256GB.addEventListener('click', function () {
    storageCost.innerText = 0;
    TotalPrice()

});
storage512GB.addEventListener('click', function () {
    storageCost.innerText = 100;
    TotalPrice()

});
storage1TB.addEventListener('click', function () {
    storageCost.innerText = 180;
    TotalPrice()

});



/***********************
Delivery Charhe part
*************************/

const free = document.getElementById('free');
const express = document.getElementById('express');

// cost set part
const deliveryCharge = document.getElementById('deliveryCharge');



// deliveryCharge addEventListener part

free.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    TotalPrice()

})
express.addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    TotalPrice()

});


// total Price get
const totalPrice = document.getElementById('totalPrice');






// finall Price  after promo code get
const totalPrices = document.getElementById('totalPrice');

const finalPrice = document.getElementById('finalPrice')





















