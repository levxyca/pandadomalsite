let Menu = document.getElementsByClassName("menu__btn");

Menu = Array.from(Menu);

let Current;
let Click;
let Active;

Menu.forEach((item) => {
  item.addEventListener("click", (e) => {
    Current = document.querySelector(".active");
    Click = e.target.id;
    Current.classList.toggle("active");
    Current.classList.toggle("none");
    Active = document.querySelector(`.${Click}`);
    Active.classList.toggle("none");
    Active.classList.toggle("active");
  });
});
