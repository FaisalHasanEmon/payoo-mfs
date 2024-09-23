// Show the cash out form
document
  .getElementById("bt-show-cash-out")
  .addEventListener("click", function () {
    // Show cash out form clicked
    console.log("Cash out form clicked");
    document.getElementById("cash-out-form").classList.remove("hidden");

    // Hide add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

// Show the add money form hide the cash out form
document
  .getElementById("bt-show-add-money-form")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.add("hidden");

    document.getElementById("add-money-form").classList.remove("hidden");
  });
