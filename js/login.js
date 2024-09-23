// document.getElementById('button-login').addEventListener('click',function(){});

// search: form submit reloading the page

// step-1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading the browser)
    event.preventDefault(); // <-----Vejal to begginer

    // step-3: get the phone number and pi number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    // step-4: validate the phone number and pin number
    // This is temporary. It is not good practice
    if (phoneNumber === "5" && pinNumber === "1234") {
      //   alert("Login Successfull");
      //   step-5: Allow user to use the website
      window.location.href = "home.html";
    } else {
      alert("Incorrect pin and phone number");
    }
  });
