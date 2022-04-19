let tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event) {
  //event.target.parentNode.remove()
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);
})
