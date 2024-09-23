/**
 * 1. add event listener to the add Money button (form submit)
 * make sure to preventDefault to that page doesn't reloads
 *
 * 2. get teh money user wants to add
 * also, get the pin number provided
 *
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to teh account balance
 *
 * 4. get the current balance
 *
 * 5. add the current balance
 *
 * 6.display/update the balance in the DOM/UI
 */

document.getElementById("btn-add-money").addEventListener("click", (event) => {
  event.preventDefault();
  const inputPinNumber = document.getElementById("input-pin-number").value;
  const inputAddMoney = document.getElementById("input-add-money").value;
  const balance = document.getElementById("account-balance").innerText;
  if (inputPinNumber === "1234" && !isNaN(inputAddMoney)) {
    const newBalance = parseFloat(inputAddMoney) + parseFloat(balance);
    document.getElementById("account-balance").innerText = newBalance;
  } else {
    alert("Failed to add money. Please try again later");
  }
});
