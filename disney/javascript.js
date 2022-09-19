var btnrow = document.getElementById('btn-row');

btnrow.addEventListener("click", () => {
    window.scroll({top: innerHeight, behavior: "smooth"})
})


window.addEventListener("scroll", () => {
   
const photo = document.getElementById('photo');
const active = document.querySelector('.active');

photo.classList.toggle("active", window.scrollY > 100)
})