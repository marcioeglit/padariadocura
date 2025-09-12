
document.getElementById("feedback").addEventListener('submit', (e) => {
  e.preventDefault()
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const produtoservico = document.querySelector("#produtoservico").value
  const avaliacao = document.querySelector("input[name='avaliacao']:checked").value
  const numeroloja = 5516993048410
  let mensagem = `Novo feedback\n\nNome: ${nome}\nE-mail: ${email}\nProduto ou serviço: ${produtoservico}\nAvaliação: ${avaliacao}`
  const url = `https://wa.me/${numeroloja}?text=${encodeURIComponent(mensagem)}`
  window.open(url, "_blank")
})