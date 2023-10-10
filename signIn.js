const calendarAge = document.getElementById("calendarAge");
const subButton = document.getElementById("btnSub");
const form = document.getElementsByTagName("form");
const userInfo = [];

const saveItem = function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const emailUs = document.getElementById("email").value;
  console.log(firstName);

  return firstName, lastName, emailUs;
};
class Users {
  constructor(firstName, lastName, emailUs) {
    this.name = firstName;
    this.lastName = lastName;
    this.email = emailUs;
  }
}
subButton.addEventListener("submit", saveItem());
