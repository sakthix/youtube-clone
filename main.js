const sideBar = document.querySelector(".sidebar");
const menuBar = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuBar.addEventListener('click',() =>{
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("larage-container")
})
