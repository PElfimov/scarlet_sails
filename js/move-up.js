var step=374;
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

  if ($(btn[1]).prop('disabled') && (i < (sumStep-1))) {
    $(btn[1]).removeAttr('disabled')
  };

}

function moveleft() {
  i = i - 1;
  shift = step * i;
  $(list).css({
    '--moveStart': 'translateX(-600px) translateY(-' + shift + 'px)',
    '--moveStop': 'translateX(0) translateY(-' + shift + 'px)'
  });

  if ($(list).hasClass('jsmove--right') || $(list).hasClass('jsmove--right1')) {

    if ($(list).hasClass('jsmove--right')) {
      $(list).removeClass('jsmove--right')
    };

    if ($(list).hasClass('jsmove--right1')) {
      $(list).removeClass('jsmove--right1')
    };

    $(list).addClass("jsmove--left");
  } else if ($(list).hasClass('jsmove--left')) {
    $(list).removeClass('jsmove--left');
    $(list).addClass("jsmove--left1");
  } else if ($(list).hasClass('jsmove--left1')) {
    $(list).removeClass('jsmove--left1');
    $(list).addClass("jsmove--left");
  };

}

function moveright() {

  i = i + 1;
  shift = step * i;
  $(list).css({
    '--moveStart': 'translateX(600px) translateY(-' + shift + 'px)',
    '--moveStop': 'translateX(0) translateY(-' + shift + 'px)'
  });
  if ($(list).hasClass('jsmove--left')) {
    $(list).removeClass('jsmove--left')
  };
  if ($(list).hasClass('jsmove--left1')) {
    $(list).removeClass('jsmove--left1')
  };
  if (i == 1) {
    $(list).addClass("jsmove--right");
  } else if ($(list).hasClass('jsmove--right')) {
    $(list).removeClass('jsmove--right');
    $(list).addClass("jsmove--right1");
  } else if ($(list).hasClass('jsmove--right1')) {
    $(list).removeClass('jsmove--right1');
    $(list).addClass("jsmove--right");
  }
}
