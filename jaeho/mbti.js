const USER_DATA = "userdata";
let links;

document.addEventListener("DOMContentLoaded", () => {
  links = document.querySelectorAll(".answer-box a");
  getMbtiValue();
});

let userData = [];

const getMbtiValue = () => {
  links.forEach(link => {
    link.addEventListener("click", e => {
      const data = JSON.parse(link.dataset.value);
      const index = data.index;
      const mbti = data.mbti;

      userData[index] = mbti;
      sessionStorage.setItem(USER_DATA, JSON.stringify(userData));
    });
  });
};

const getUserData = sessionStorage.getItem(USER_DATA);

const readMbtiValue = () => {
  userData = JSON.parse(getUserData);
};

if (getUserData !== null) {
  readMbtiValue();
}
