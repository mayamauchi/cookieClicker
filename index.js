// //Data
let count = 0; 
let perSecond = 0;
let quantity = 0;
let quantityCappuccino = 0;
let quantityDripCoffee = 0;
let quantityIceCoffee = 0;
let quantityLatte = 0


//Event listener links
let cpc = document.getElementById("count-flex-child-element")
let coffee = document.getElementById("coffee") //coffee per click
let counter = document.getElementById("cps") //coffee per second
let espressoButton = document.getElementById("buy_espresso")
let cappuccinoButton = document.getElementById("buy_cappuccino")
let dripCoffeeButton = document.getElementById("buy_drip_coffee")
let iceCoffeeButton = document.getElementById("buy_ice_coffee")
let latteButton = document.getElementById("buy_latte")

// //Array for producer 
let producers = {
    'id': ['espresso', 'cappuccino', 'drip_coffee', 'ice_coffee', 'latte'],
    'price': ['10', '20', '30', '40', '50'],
    'cps': ['1', '5','10', '15', '20'],
    'qty': ['0','0','0', '0', '0']
}

//Coffee image clicker
coffee.addEventListener('click', function(){
    count += 1;
    cpc.innerText = count;

})

//Function for timer
function timer() {
    count = count + perSecond;
    cpc.innerText = count;
}

//Producers
espressoButton.addEventListener('click', function (){
    if (count >= producers.price[0]) {
        count = count - 10;
        cpc.innerText = count;  
        perSecond += 1; 
        cps.innerText = perSecond;
        let quantities = document.getElementById("espressoQuantity");
        quantity += 1;
        quantities.innerText = quantity;
    } else {
        alert ('Not enough coffee!')
    }
})

cappuccinoButton.addEventListener('click', function (){
    if (count >= producers.price[1]) {
        count = count - 20;
        cpc.innerText = count;  
        perSecond += 5; 
        cps.innerText = perSecond;
        let cappuccinoQuantity = document.getElementById("cappuccinoQuantity")
        quantityCappuccino += 1;
        cappuccinoQuantity.innerText = quantityCappuccino;
    } else {
        alert ('Not enough coffee!')
}
})


dripCoffeeButton.addEventListener('click', function (){
    if (count >= producers.price[2]) {
        count = count - 30;
        cpc.innerText = count;  
        perSecond += 10; 
        cps.innerText = perSecond;
        let dripCoffeeQuantity = document.getElementById("dripCoffeeQuantity")
        quantityDripCoffee += 1;
        dripCoffeeQuantity.innerText = quantityDripCoffee;
    } else {
        alert ('Not enough coffee!')
}
})

iceCoffeeButton.addEventListener('click', function (){
    if (count >= producers.price[3]) {
        count = count - 40;
        cpc.innerText = count;  
        perSecond += 15; 
        cps.innerText = perSecond;
        let iceCoffeeQuantity = document.getElementById("iceCoffeeQuantity")
        quantityIceCoffee += 1;
        iceCoffeeQuantity.innerText = quantityIceCoffee;
    } else {
        alert ('Not enough coffee!')
}
})

latteButton.addEventListener('click', function (){
    if (count >= producers.price[4]) {
        count = count - 50;
        cpc.innerText = count;  
        perSecond += 20; 
        cps.innerText = perSecond;
        let latteQuantity = document.getElementById("latteQuantity")
        quantityLatte += 1;
        latteQuantity.innerText = quantityLatte;
    } else {
        alert ('Not enough coffee!')
}
})

//Interval
setInterval(timer, 1000)
