allfolded = true;

function fold(elem) {
    elem.parentElement.classList.toggle('fold');
}

var elements = document.getElementsByTagName('a');
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].parentElement.classList.add('fold');
        if( ! elements[i].getAttribute('href') ) {
            elements[i].onclick = function () {
            fold (this);
        }
    }
}

function allfold() {
  var elements = document.getElementsByTagName('a');
  for(var i = 0, len = elements.length; i < len; i++) {
    if( ! elements[i].getAttribute('href') ) {
      if (allfolded) {
        elements[i].parentElement.classList.remove('fold');
        allfolded = false;
      } else {
        elements[i].parentElement.classList.add('fold');
        allfolded = true;
      }
    }
  }
}
