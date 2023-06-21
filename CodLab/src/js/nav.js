var MenuLi = document.getElementById("MenuLi");
MenuLi.style.maxHeight = "0px";
function ToggleMenu(){
    if(MenuLi.style.maxHeight=="0px")
        {
          MenuLi.style.display = "flex";
          MenuLi.style.maxHeight = "220px";
        }
    else{
      MenuLi.style.maxHeight = "0px";
    }
}

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  ToggleMenu();
});