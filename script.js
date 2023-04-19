const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
})

document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
}))