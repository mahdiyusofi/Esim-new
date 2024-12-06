const offscreenMenu = document.querySelector(".off-nav-bar");
const onbtn = document.querySelector("#hamburger-show-btn");

onbtn.addEventListener("click", () => {
    offscreenMenu.classList.toggle("active");
})