const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const userEmail = document.querySelector(".user-email-input");
const userPwd = document.querySelector(".user-password-input");
const submitBtn = document.querySelector(".btn-login");

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function onChangeIdAndPwdInputHandler(e, node) {
  const inputVal = e.target.value;
  emailReg(inputVal) || pwReg(inputVal)
    ? node.classList.remove("is--invalid")
    : node.classList.add("is--invalid");
}

function onSubmitHandler(e) {
  e.preventDefault();
  if (userEmail.value !== user.id || userPwd.value !== user.pw)
    return alert("아이디 혹은 비밀번호를 정확히 입력해 주세요.");
  window.location.href = "welcome.html";
}

userEmail.addEventListener("input", (e) => {
  onChangeIdAndPwdInputHandler(e, userEmail);
});
userPwd.addEventListener("input", (e) => {
  onChangeIdAndPwdInputHandler(e, userPwd);
});
submitBtn.addEventListener("click", onSubmitHandler);
