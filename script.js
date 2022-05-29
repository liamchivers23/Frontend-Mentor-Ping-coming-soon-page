const btn = document.querySelector(".main-btn");
const errorMsg = document.querySelector(".email-error-msg");
const inputEmail = document.querySelector(".input-email");
const regex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

btn.addEventListener("click", (e) => {
  if (!inputEmail.value.match(regex)) {
    e.preventDefault();
    errorMsg.style.display = "block";
    inputEmail.style.borderColor = "red";
    inputEmail.value = "";
  } else {
    e.preventDefault();
    errorMsg.style.display = "block";
    errorMsg.textContent = "Thanks! We will notify you as soon as possible!";
    errorMsg.style.color = "green";
    inputEmail.style.borderColor = "green";
    inputEmail.value = "";
  }
});
