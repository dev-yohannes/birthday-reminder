const nameInput = document.querySelector("#name-input");
const ageInput = document.querySelector("#age-input");
const addButton = document.querySelector("#add-button");
const ul = document.querySelector("ul");

const newDate = new Date();
newDate.get;
console.log(newDate);

addButton.addEventListener("click", () => {
  newLi = document.createElement("li");
  newLi.innerHTML = `
  <div class="profile-pic"></div>
    <div class="name-dayLeft">
        <p class="user-name">${nameInput.value}</p>
        <p class="day-left">${ageInput.value} years</p>
    </div>
    `;
  ul.appendChild(newLi);
});
