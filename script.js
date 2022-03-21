// dark and light mode
$(document).ready(function(){
  $("#selector").change(function(){
    $("body").toggleClass("bg-dark");
    $("nav").toggleClass("navbar-dark bg-dark");
    $(".custom-control-label").toggleClass("text-white");
    $("h1").toggleClass("text-white");
    $("h2").toggleClass("text-white");
    $("h6").toggleClass("text-white");
    $("span").toggleClass("text-white");
    $("#newh1").removeClass("big-heading");
    $("#newh1").toggleClass("black");
    $("i").toggleClass("text-white");
  })
})

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
   let itemClass = this.parentNode.className

   for(i = 0; i < skillsContent.length; i++){
      skillsContent[i].className = 'skills__content skills__close'
   }
   if(itemClass === 'skills__content skills__close'){
      this.parentNode.className = 'skills__content skills__open'
   }
}

skillsHeader.forEach((el) =>{
   el.addEventListener('click', toggleSkills)
})
