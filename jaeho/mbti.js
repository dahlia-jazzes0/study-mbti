const USER_DATA_KEY = "userdata";

let userData = [];

document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelector(".answer-box");

  answers.addEventListener("click", e => {
    const { questionId, value } = e.target.dataset;

    userData[questionId] = value;
    sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
  });
});

const loadUserData = () => {
  const userDataAlreadyHave = sessionStorage.getItem(USER_DATA_KEY);

  if (userDataAlreadyHave !== null) {
    userData = JSON.parse(userDataAlreadyHave);
  }
};

loadUserData();

const deleteUserData = () => {
  sessionStorage.removeItem(USER_DATA_KEY);
};

const navigateTo = url => {
  location.href = url;
};

const isValidMbti = data => {
  const validMbti = [
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
  const valid = validMbti.includes(data);

  return valid;
};

const navigateToResultPage = mbti => {
  const resultPage = `../${mbti.toLowerCase()}.html`;

  navigateTo(resultPage);
};

const checkUserData = () => {
  const userMbti = userData.join("");
  const EXPECTED_ANSWER_COUNT = 4;

  if (userData.length === EXPECTED_ANSWER_COUNT) {
    if (!isValidMbti(userMbti)) {
      alert("처음부터 다시 해주세요!");
      deleteUserData();
      navigateTo("index.html");
      return;
    }

    navigateToResultPage(userMbti);
    return;
  }
};

checkUserData();
