const open1=document.querySelector(".js-open");
const modalbg=document.getElementById("modal-bg");
const modalbox=document.getElementById("modal-box");
const close1=document.querySelectorAll(".js-close");
open1.addEventListener('click',function(event){
    
    event.preventDefault();
    
    modalbg.classList.add("active")
    modalbox.classList.add("active")
    // modalbg.style.opacity="100%";
    // modalbg.style.zIndex="11";
    // modalbox.style.opacity="100%";
    // modalbox.style.zIndex="10";

})

close1.forEach(btn => {
    btn.addEventListener("click",function(event){
    modalbg.classList.remove("active")
    modalbox.classList.remove("active")

})
})