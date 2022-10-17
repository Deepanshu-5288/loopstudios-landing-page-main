document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.add("hamburger-hide");
    document.querySelector(".close-ul").classList.add("close-ul-show");
    document.querySelector(".close-ul").classList.remove("close-ul-hide");
})
document.querySelector(".close-img").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("hamburger-hide");
    document.querySelector(".close-ul").classList.remove("close-ul-show");
    document.querySelector(".close-ul").classList.add("close-ul-hide");
   
})