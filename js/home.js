// Add money to the account
/**
 Step-1: add an event handler and prevent page reload after form submit
 Step-2: get money to be added to the account balance
 */

// Step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Step-2: get money to be added inside the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    // Get Pin Number Provided
    const inputPinNumber = document.getElementById("input-pin-number").value;
    console.log(inputPinNumber);
  });
