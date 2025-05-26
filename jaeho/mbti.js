const USER_DATA = "userdata";
let links;

document.addEventListener("DOMContentLoaded", () => {
  links = document.querySelector(".answer-box");
  getMbtiValue();
});

let userData = [];

const getMbtiValue = () => {
  links.addEventListener("click", e => {
    const data = JSON.parse(e.target.dataset.value);
    const index = data.index;
    const mbti = data.mbti;

    userData[index] = mbti;
    sessionStorage.setItem(USER_DATA, JSON.stringify(userData));
  });
};

const haveUserData = sessionStorage.getItem(USER_DATA);

const readMbtiValue = () => {
  userData = JSON.parse(haveUserData);
};

if (haveUserData !== null) {
  readMbtiValue();
}

const userDataCheck = () => {
  if (userData.length === 4) {
    const isNull = userData.includes(null);

    if (isNull) {
      alert("처음부터 다시 해주세요!");
      sessionStorage.removeItem(USER_DATA);
      location.href = "index.html";
      return;
    }
    const userMbti = userData.join("");
    const result = `${userMbti}.html`;

    location.href = result;
  }
};

userDataCheck();
