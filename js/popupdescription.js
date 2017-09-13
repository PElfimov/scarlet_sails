var linkOrders = document.querySelectorAll(".js-order"),
  index, linkOrder;
var popupOrder = document.querySelector(".modal-content--order");
var popupthenks = document.querySelector(".modal-content--thanks");
var closes = document.querySelectorAll(".modal-content__btn-close"),
  close;
var user = popupOrder.querySelector("[name=user]");



for (index = 0; index < linkOrders.length; index++) {
  linkOrder = linkOrders[index];
  linkOrder.addEventListener('click', clickHandler);

}


function clickHandler(event) {
  console.log('click', this.innerText);
  event.preventDefault();
  popupOrder.classList.add("modal-content--show");
  user.focus();
  }


for (index = 0; index < closes.length; index++) {
  close = closes[index];
  close.addEventListener('click', clickClose);
}


function clickClose(event) {
  console.log('click', this.innerText);
  event.preventDefault();

  if (popupOrder.classList.contains("modal-content--show")) {
    popupOrder.classList.remove("modal-content--show");
  }
  if (popupthenks.classList.contains("modal-content--show")) {
    popupthenks.classList.remove("modal-content--show");
  }
}



window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (popupOrder.classList.contains("modal-content--show")) {
      popupOrder.classList.remove("modal-content--show");
    }
    if (popupthenks.classList.contains("modal-content--show")) {
      popupthenks.classList.remove("modal-content--show");
    }

  }
});
