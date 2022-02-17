// Initialize 
const incomeInput = document.getElementById("income-in");

const errorIncomExpense = document.getElementById("error-income-expense");

const expenseRentInput = document.getElementById("ex-rent-in");
const expenseClothInput = document.getElementById("ex-cloth-in");
const expenseFoodInput = document.getElementById("ex-food-in");
const totalExpense = document.getElementById("total-ex");
const Balance = document.getElementById("balance");

const CalcluteButton = document.querySelector(".cal-btn");

const savingInput = document.getElementById("save-in");
const savingAmount = document.getElementById("saving");
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

    // console.log(expense);
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