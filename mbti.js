// const mbtiForm = document.querySelector("#mbtiForm");
// const lastButton = document.querySelector("#lastButton");

// let userData = [];
// let userMbti = "";

// const getMbtiValue = event => {
//   const mbtiValue = document.querySelector('input[name="mbti"]:checked').value;
//   pushMbtiValue(mbtiValue);
//   event.preventDefault();
// };

// const pushMbtiValue = mbtiValue => {
//   if (mbtiValue === "I" || mbtiValue === "E") {
//     userData[0] = mbtiValue;
//   } else if (mbtiValue === "N" || mbtiValue === "S") {
//     userData[1] = mbtiValue;
//   } else if (mbtiValue === "F" || mbtiValue === "T") {
//     userData[2] = mbtiValue;
//   } else if (mbtiValue === "J" || mbtiValue === "P") {
//     userData[3] = mbtiValue;
//   }
// };

// const confirmData = value => {
//   let valid = value.length === 4 ? true : false;
//   console.log(value.length);

//   if (valid) {
//     getUserMbti();
//   } else {
//     alert("처음부터 다시 진행해주세요!");
//     return;
//   }
// };

// const getUserMbti = () => {
//   for (let i = 0; i < 4; i++) {
//     userMbti += userData[i];
//   }
//   console.log(`당신의 MBTI는 ${userMbti}입니다.`);
// };

// mbtiForm.addEventListener("submit", getMbtiValue);
// lastButton.addEventListener("click", () => {
//   confirmData(userData);
// });

const userData = [];

const getMbtiValue = value => {
  userData[value.index] = value;
};
