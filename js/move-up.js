var step = "380";
var list, сlassSection, direction, btn, obj, shift;
var i = 0;

function moveUp(obj, сlassSection, direction) {
  btn = document.querySelector(сlassSection).querySelectorAll("button");
  list = document.querySelector(сlassSection).querySelectorAll("ul");
  console.log(сlassSection);
  console.log(direction);
  console.log(btn);
  console.log(obj);
  if (obj == btn[0]) {
    console.log("Двигаем влево");
    moveleft();
    if ($(btn[1]).prop('disabled')) {
      $(btn[1]).removeAttr('disabled')
    };
    // $(obj).attr('disabled', 'disabled');

  } else {
    console.log("Двигаем вправо");
    moveright();
    // $(obj).attr('disabled', 'disabled');
    if ($(btn[0]).prop('disabled')) {
      $(btn[0]).removeAttr('disabled')
    };

  }


}

function moveleft() {

  $(list).addClass("jsmove--left");
  //  $(list).css({
  //    '--moveUP': 'translateX(px)'
  // });
  if ($(list).hasClass('jsmove--right')) {
    $(list).removeClass('jsmove--right')
  }

}

function moveright() {
  var el = $(list),
    newone = el.clone(true);

  el.before(newone);

  $("." + el.attr("class") + ":last").remove();



  i = i + 1;
  shift = step * i;
  console.log(i, step);
  $(list).addClass("jsmove--right");
  $(list).css({
    '--moveRightStart': 'translateX(-600px) translateY(-' + shift + 'px)',
    '--moveRightStop': 'translateX(0) translateY(-' + shift + 'px)'
  });
  if ($(list).hasClass('jsmove--left')) {
    $(list).removeClass('jsmove--left')
  };




}
