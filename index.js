const menuBtn = document.querySelector(".hamburger");
let menuOpen = false;

menuBtn.addEventListener("click", function() {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        console.log("clicked")
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        console.log("clicked close")
        menuOpen = false;
    }
})