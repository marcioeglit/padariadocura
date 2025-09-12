document.getElementById("pedido").addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = 5516993048410;
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const tipo = document.querySelector("input[name='tipo_produto']:checked").value;
  const sabor = document.querySelector("#sabor").value;
  const tamanho = document.querySelector("input[name='tamanho']:checked").value;
  const observacao = document.getElementById("observacao").value;
  const orcamento = document.getElementById("orcamento").value;
  const data = document.getElementById("data_entrega").value

  let mensagem  = `Novo pedido\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nProduto: ${tipo}\nSabor: ${sabor}\nTamanho: ${tamanho}\nData: ${data}\nObservação: ${observacao}\nOrçamento máximo: ${orcamento}`

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});
