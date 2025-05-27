// 다시하기
document.querySelector(".btn-restart").addEventListener("click", function () {
  window.location.href = "index.html";
});

// 공유하기
document.querySelector(".btn-share").addEventListener("click", function () {
  const url = window.location.href;

  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("링크가 클립보드에 복사되었습니다!");
    })
    .catch((err) => {
      alert("복사 실패. 지원하지 않는 브라우저입니다.");
      console.error(err);
    });
});
