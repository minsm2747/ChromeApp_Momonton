const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {

}

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClick);
init();