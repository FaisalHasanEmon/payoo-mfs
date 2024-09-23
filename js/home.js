// Add money to the account
/**
 Step-1: add an event handler and prevent page reload after form submit
 Step-2: get money to be added to the account balance
 get the pin number

 Step-3: Verify the pin number
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

    // Step-3: verify the pin number
    if (inputPinNumber === "1234") {
      alert("Your money is adding");

      //Step-4: Get the current Balance
      const balance = document.getElementById("account-balance").innerText;

      //   Step-5:Add addMoneyInput with balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log("Your New Balance is: ", newBalance);

      //   Step-6 Update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
