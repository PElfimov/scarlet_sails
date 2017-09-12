var popupthenks = document.querySelector(".modal-content--thanks");

function callorder() {
  var msg = $('#formx').serialize();
  var popupOrder = document.querySelector(".modal-content--order");
  var orderbtn = popupOrder.querySelector(".order-form__btn");
  $.ajax({
    type: 'POST',
    url: 'php/send.php',
    data: msg,
    success: function(data) {
      $('#results').html(data);
    },
    error: function(xhr, str) {
      alert('Возникла ошибка: ' + xhr.responseCode);
    }
  });
  if (popupOrder.classList.contains("modal-content--show")) {
    popupOrder.classList.remove("modal-content--show");

  }
  popupthenks.classList.add("modal-content--show");
}

function callconcult() {
  var msg = $('#formy').serialize();
  var popup = document.querySelector(".modal-content--consultation");
  var orderbtn = popup.querySelector(".order-form__btn");
  $.ajax({
    type: 'POST',
    url: 'php/send.php',
    data: msg,
    success: function(data) {
      $('#results').html(data);
    },
    error: function(xhr, str) {
      alert('Возникла ошибка: ' + xhr.responseCode);
    },
  });
console.log("Что то происходит");
  if (popup.classList.contains("modal-content--show")) {
    popup.classList.remove("modal-content--show");
console.log("Что то происходит2");
  };
  popupthenks.classList.add("modal-content--show");
}
