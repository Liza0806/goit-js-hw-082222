
import throttle from 'lodash.throttle';

let form = document.querySelector(".feedback-form");
let emailContent = document.querySelector("input");
let messageContent = document.querySelector("textarea");

form.addEventListener("input", throttle(handleInputChange, 500))

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    if (!emailContent.value || !messageContent.value) {
        return alert("You Shall not pass!");
    }
    console.log(localStorage.getItem('feedback-form-state'));

    
    localStorage.removeItem('feedback-form-state');
    emailContent.value = "";
    messageContent.value = "";
   
});

emailContent.addEventListener("input", handleInputChange);
messageContent.addEventListener("input", handleInputChange);

function handleInputChange() {

  
  let formData = {
    email: emailContent.value,
    message: messageContent.value
  } ;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
   
}

let objectForm = JSON.parse(localStorage.getItem('feedback-form-state'));


 
   emailContent.value = objectForm?.email || "";
messageContent.value = objectForm?.message || "";


