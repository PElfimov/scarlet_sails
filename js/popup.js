var link = document.querySelector(".js-consultation");
var popup = document.querySelector(".modal-content--consultation");
var close = popup.querySelector(".modal-content__btn-close");
var user = popup.querySelector("[name=user]");
var tel = popup.querySelector("[name=phone]");
var checkbox = popup.querySelector("[name=personal-data]");
var consultationform = document.querySelector(".order-form--consultation");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content--show");
  user.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content--show");
});
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content--show")) {
            popup.classList.remove("modal-content--show");
          }
        }
      });
