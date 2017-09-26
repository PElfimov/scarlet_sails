var step = 374;
var list, сlassSection, direction, btn, obj, shift, sumStep;
var i = 0;

function moveUp(obj, сlassSection, sumStep) {
  btn = document.querySelector(сlassSection).querySelectorAll("button");
  list = document.querySelector(сlassSection).querySelectorAll("ul");
  if (obj == btn[0]) {
    moveleft();

  } else {
    moveright();
  }
  if ($(btn[0]).prop('disabled') && (i >= 1)) {
    $(btn[0]).removeAttr('disabled')
  };
  if (i <= 0) {
    $(btn[0]).attr('disabled', 'disabled');
  };
  if (i >= (sumStep - 1)) {
    $(btn[1]).attr('disabled', 'disabled');
  };

  if ($(btn[1]).prop('disabled') && (i < (sumStep - 1))) {
    $(btn[1]).removeAttr('disabled')
  };

}

function moveleft() {
  i = i - 1;
  shift = step * i;

  $(list).css({
    transform: "translate(0, -" + shift + "px)",
    transition: ".6s transform"
  });


}

function moveright() {

  i = i + 1;
  shift = step * i;


  $(list).css({
    transform: "translate(0, -" + shift + "px)",
    transition: ".6s transform"
  });


}
