document.getElementById("btn-cash-out").addEventListener("click", (event) => {
  event.preventDefault();
  const inputCashOutPin = document.getElementById("input-cash-out-pin").value;
  const inputCashOut = document.getElementById("input-cash-out").value;
  const balance = document.getElementById("account-balance").innerText;
  if (inputCashOutPin === "1234" && !isNaN(inputCashOut)) {
    const reducedBalance = parseFloat(balance) - parseFloat(inputCashOut);
    document.getElementById("account-balance").innerText = reducedBalance;
  } else {
    alert("Failed to add money. Please try again later");
  }
});
