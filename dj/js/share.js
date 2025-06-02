getShareButton()?.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    alert("링크가 클립보드에 복사되었습니다!");
  } catch (error) {
    alert("복사 실패. 지원하지 않는 브라우저입니다.");
    console.error(error);
  }
});

function getShareButton() {
  return (
    document.querySelector("#share") ??
    document.querySelector(".btn-share") ??
    document.querySelector(".link-share")
  );
}
