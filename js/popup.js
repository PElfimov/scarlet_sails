var link = document.querySelector(".js-consultation");
var linkOrder = document.querySelectorAll(".js-order");
var popup = document.querySelector(".modal-content--consultation");
var popupOrder = document.querySelector(".modal-content--order");
var close = popup.querySelector(".modal-content__btn-close");
var user = popup.querySelector("[name=user]");
var tel = popup.querySelector("[name=phone]");
var checkbox = popup.querySelector("[name=personal-data]");
var consultationform = document.querySelector(".order-form--consultation");

// https://toster.ru/q/240483 поглядеть сдесь как сделать

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content--show");
  user.focus();
});

linkOrder.addEventListener("click", function() {
  console.log("Энажата кнопка заказать");
  event.preventDefault();
  popupOrder.classList.add("modal-content--show");
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
