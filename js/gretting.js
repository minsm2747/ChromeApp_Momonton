const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USRE_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localstroage.getItem(USRE_LS);
    if (currentUser === null) {
        // 사용자(User)가 존재 하는 경우
            
    } else {
        // 사용자(User)가 존재 하지 않는 경우
            paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();