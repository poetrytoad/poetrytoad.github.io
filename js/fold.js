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
  var elements = document.getElementsByTagName('li');
  for(var i = 0, len = elements.length; i < len; i++) {
      elements[i].parentElement.classList.toggle('fold');
      allfolded = !allfolded;
  }
}
