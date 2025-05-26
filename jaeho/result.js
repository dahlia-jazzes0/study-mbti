const USER_DATA = "userdata";
let homeButton;

document.addEventListener("DOMContentLoaded", () => {
  homeButton = document.querySelector(".action-section__button");
  getHomeButton();
});

const getHomeButton = () => {
  homeButton.addEventListener("click", () => {
    sessionStorage.removeItem(USER_DATA);
  });
};
