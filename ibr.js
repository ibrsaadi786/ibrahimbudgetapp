 let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const cheakAmountButton = document.getElementById("cheak-amount");
const totalAmountButton = document.getElementByI("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById(" expenditure-value");
const balanceValue = document.getElementById(" balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;
totalAmountButton.addEventListener("click",() => {
    tempAmount = totalAmount.value ;
    if ( tempAmount === "" || tempAmount < 0 ) {
        errorMessage.classList.remove("hide");

    } else{
        errorMessage.classList.add("hide");

        amount.innerHTML = tempAmount;

        balanceValue.innerText = tempAmount -
        expenditureValue.innerText;
        totalAmount.value = "";
    
    }
})