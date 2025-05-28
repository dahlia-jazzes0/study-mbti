const USER_DATA = "userdata";
let answers;

document.addEventListener("DOMContentLoaded", () => {
  answers = document.querySelector(".answer-box");
  getMbtiValue();
});

let userData = [];

const getMbtiValue = () => {
  answers.addEventListener("click", e => {
    const data = e.target.dataset;
    const id = data.questionId;
    const value = data.value;

    userData[id] = value;
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

const deleteUserData = () => {
  sessionStorage.removeItem(USER_DATA);
};

const getUrl = src => {
  return (location.href = src);
};

const validCheck = data => {
  const validResults = [
    "ISTJ",
    "ISTP",
    "ISFJ",
    "ISFP",
    "INTJ",
    "INTP",
    "INFJ",
    "INFP",
    "ESTJ",
    "ESTP",
    "ESFJ",
    "ESFP",
    "ENTJ",
    "ENTP",
    "ENFJ",
    "ENFP",
  ];
  const valid = validResults.includes(data);

  return valid;
};

const getResultPage = mbti => {
  const result = `../${mbti}.html`;

  getUrl(result);
};

const checkUserData = () => {
  const userMbti = userData.join("").toLowerCase();

  if (userData.length === 4) {
    if (!validCheck(userMbti)) {
      alert("처음부터 다시 해주세요!");
      deleteUserData();
      getUrl("index.html");
      return;
    }

    getResultPage(userMbti);
    return;
  }
};

checkUserData();
