const InitialInput = document.querySelector("#InitialInput");
const QuantityInput = document.querySelector("#QuantityInput");
const PriceInput = document.querySelector("#PriceInput");
const chkbtn = document.querySelector("#checkk");
const resultDisplay = document.querySelector("#resultDisplay");


chkbtn.addEventListener("click", function(){
    profitOrLoss(InitialInput.value, QuantityInput.value, PriceInput.value)
});

function profitOrLoss(Initial, Quantity, Price){
    if(Initial > Price){
        var loss = (Initial - Price)*Quantity;
        var lossPerc = (loss/Initial)*100;
        console.log(lossPerc);
        resultDisplay.innerHTML = "The Loss is "+loss+" and <br> the Loss percentage is "+lossPerc+"%";
    }
    else if(Price > Initial){
        var profit = (Price - Initial)*Quantity;
        var profitPerc = (profit/Initial)*100;
        console.log(profitPerc);
        resultDisplay.innerHTML = "The Profit is "+profit+" and <br> the Profit percentage is "+profitPerc+"%";
    }
    else{
        resultDisplay.innerHTML = "Neither Loss nor Profit, <br> Wait for some time!";
    };
}

