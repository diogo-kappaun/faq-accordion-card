const itemPerguntaEReposta = document.querySelectorAll('.faq-item')

let i = 0

itemPerguntaEReposta.forEach(item => {
  item.addEventListener('click', () => {
    const elementoAtivo = document.querySelector('.selecionado')

    if (elementoAtivo) {
      elementoAtivo.classList.remove('selecionado')
    }

    item.classList.add('selecionado')
  })
});