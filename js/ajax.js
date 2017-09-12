function callorder() {
  var msg   = $('#formx').serialize();
      $.ajax({
        type: 'POST',
        url: 'php/send.php',
        data: msg,
        success: function(data) {
          $('#results').html(data);
        },
        error:  function(xhr, str){
    alert('Возникла ошибка: ' + xhr.responseCode);
        }
      });

  }

  function callconcult() {
    var msg   = $('#formy').serialize();
        $.ajax({
          type: 'POST',
          url: 'php/send.php',
          data: msg,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
      alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });

    }
