// Initialize 
const incomeInput = document.getElementById("income-in");

const errorIncomExpense = document.getElementById("error-income-expense");
const errorSaving = document.getElementById("error-saving");

const expenseRentInput = document.getElementById("ex-rent-in");
const expenseClothInput = document.getElementById("ex-cloth-in");
const expenseFoodInput = document.getElementById("ex-food-in");
const totalExpense = document.getElementById("total-ex");
const Balance = document.getElementById("balance");

const CalcluteButton = document.querySelector(".cal-btn");
const SavingButton = document.querySelector(".save-btn");

const savingInput = document.getElementById("save-in");
const savingBalance = document.getElementById("saving");
const remainingBalance = document.getElementById("remaining");



// Handle Calclute 
CalcluteButton.addEventListener("click", () => {
    if (valueParseInt(expenseFoodInput.value) < 0 || valueParseInt(expenseRentInput.value) < 0 || valueParseInt(expenseClothInput.value) < 0) {
        errorIncomExpense.style.display = "block";
        incomeInput.value = "";
        expenseFoodInput.value = "";
        expenseRentInput.value = "";
        expenseClothInput.value = "";
    } else {
        totalExpense.innerHTML = calcluteExpenses(expenseFoodInput, expenseRentInput, expenseClothInput);
        Balance.innerHTML = valueParseInt(incomeInput.value) - valueParseInt(totalExpense.innerHTML);
        errorIncomExpense.style.display = "none";
        incomeInput.value = "";
        expenseFoodInput.value = "";
        expenseRentInput.value = "";
        expenseClothInput.value = "";
    }
});




// Handle Saving 
SavingButton.addEventListener("click", () => {
    let savings = savingAmount(valueParseInt(savingInput.value));
    let remaining = remainingAmount(savings);
    if (remaining < 0) {
        errorSaving.style.display = "block";
        savingInput.innerText = "";
    } else {
        savingBalance.innerText = savings;
        remainingBalance.innerText = remaining;
        errorSaving.style.display = "none";
        savingInput.innerText = "";
    }

});





// Calclute expenses 
function calcluteExpenses(food, rent, cloth) {
    let expense = valueParseInt(food.value) + valueParseInt(rent.value) + valueParseInt(cloth.value);
    return expense;
}


// Parse Int
function valueParseInt(value) {
    let parseValue = parseInt(value);
    return parseValue;
}

// saving amount
function savingAmount(percentage) {
    let balance = valueParseInt(Balance.innerText);
    let amount = (balance / 100) * percentage;
    return amount;
}

// remaining balance
function remainingAmount(savings) {
    let balance = valueParseInt(Balance.innerText);
    let amount = balance - savings;
    return amount;
}