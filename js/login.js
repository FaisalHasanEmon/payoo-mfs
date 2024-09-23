// document.getElementById('button-login').addEventListener('click',function(){});

// search: form submit reloading the page

// step-1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading the browser)
    event.preventDefault(); // <-----Vejal to begginer

    console.log("Button Clicked");

    // step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
