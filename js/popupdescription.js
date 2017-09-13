var link = document.querySelector(".js-consultation");
var linkOrders = document.querySelectorAll(".js-order"),
  index, linkOrder;
var popupOrder = document.querySelector(".modal-content--order");
var popupthenks = document.querySelector(".modal-content--thanks");
var closes = document.querySelectorAll(".modal-content__btn-close"),
  close;




link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content--show");
  user.focus();
  if (popupOrder.classList.contains("modal-content--show")) {
    popupOrder.classList.remove("modal-content--show");

  }
});

for (index = 0; index < linkOrders.length; index++) {
  linkOrder = linkOrders[index];
  linkOrder.addEventListener('click', clickHandler);

}


function clickHandler(event) {
  console.log('click', this.innerText);
  event.preventDefault();
  popupOrder.classList.add("modal-content--show");
  user.focus();
  if (popup.classList.contains("modal-content--show")) {
    popup.classList.remove("modal-content--show");

  }

}

for (index = 0; index < closes.length; index++) {
  close = closes[index];
  close.addEventListener('click', clickClose);
}


function clickClose(event) {
  console.log('click', this.innerText);
  event.preventDefault();
  if (popup.classList.contains("modal-content--show")) {
    popup.classList.remove("modal-content--show");

  }
  if (popupOrder.classList.contains("modal-content--show")) {
    popupOrder.classList.remove("modal-content--show");
  }
  if (popupthenks.classList.contains("modal-content--show")) {
    popupthenks.classList.remove("modal-content--show");
  }
}



window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content--show")) {
      popup.classList.remove("modal-content--show");
    }
    if (popupOrder.classList.contains("modal-content--show")) {
      popupOrder.classList.remove("modal-content--show");
    }
    if (popupthenks.classList.contains("modal-content--show")) {
      popupthenks.classList.remove("modal-content--show");
    }

  }
});
