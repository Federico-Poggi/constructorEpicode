const calendarAge = document.getElementById("calendarAge");
const subButton = document.getElementById("btnSub");
const form = document.getElementsByTagName("form");
const firstName = document.getElementById("firstName").textContent;
const lastName = document.getElementById("lastName");
const emailUs = document.getElementById("email");
SubmitOK = true;

const userInfo = [];

const saveItem = function () {
  console.log(firstName);
  console.log(lastName);
  console.log(emailUs);
  localStorage.setItem("name", firstName);
};

class Users {
  constructor(firstName, lastName, emailUs) {
    this.name = firstName;
    this.lastName = lastName;
    this.email = emailUs;
  }
}

subButton.addEventListener("submit", saveItem());
