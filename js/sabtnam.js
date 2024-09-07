const formTitle = document.getElementById("formTitle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const switchText = document.getElementById("switchText");
const switchLink = document.getElementById("switchLink");

switchLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginForm.classList.contains("hidden")) {
    // Switch to login
    formTitle.textContent = "ورود";
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    switchText.textContent = "حساب کاربری ندارید؟";
    switchLink.textContent = "ثبت‌نام کنید";
  } else {
    // Switch to signup
    formTitle.textContent = "ثبت‌نام ";
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    switchText.textContent = "حساب کاربری دارید؟";
    switchLink.textContent = "وارد شوید";
  }
});

// اعتبارسنجی فرم ورود
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (validateEmail(email) && validatePassword(password)) {
    alert("اعتبارسنجی موفقیت‌آمیز بود! فرم حالا می‌تواند ارسال شود.");
  } else {
    alert("لطفاً ایمیل و رمز عبور معتبر وارد کنید.");
  }
});

// اعتبارسنجی فرم ثبت‌نام
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (
    name.trim() !== "" &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    alert("ثبت‌نام موفقیت‌آمیز بود! فرم حالا می‌تواند ارسال شود.");
  } else {
    alert("لطفاً تمام فیلدها را درست وارد کنید.");
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}
