document.addEventListener('DOMContentLoaded', () => { 
document.getElementById("enviar").addEventListener("click", () => {
  let nome = document.getElementById("nome_cliente").value;
  if (nome == "") {
    document.getElementById("mensagem").textContent = "Digite seu nome";
  } else {
    document.getElementById(
      "mensagem"
    ).textContent = `😄 Bem-vindo à padaria Doçura, ${nome} 😄`;
  }
});
});

const btn_top = document
  .getElementById("btn_voltar_top")
  .addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

function calcularItem(nome, preco, idQtd, idRes) {
  let qtd = parseInt(document.getElementById(idQtd).value);
  let subtotal = qtd * preco;
  let desconto = nome === "Pão Francês" && qtd >= 5 ? subtotal * 0.1 : 0;
  let total = subtotal - desconto;

  document.getElementById(
    idRes
  ).textContent = `${nome}:   ${qtd}   x   R$ ${preco.toFixed(
    2
  )}   = R$ ${subtotal.toFixed(2)} | Desconto: R$ ${desconto.toFixed(
    2
  )} | Total: R$ ${total.toFixed(2)}`;
}

let carrinho = [];
let totalCarrinho = 0;

document.querySelectorAll(".comprar").forEach((btn) => {
  btn.addEventListener("click", () => {
    let produto = btn.dataset.produto;
    let preco = parseFloat(btn.dataset.preco);

    carrinho.push({ produto, preco });
    totalCarrinho += preco;

    let li = document.createElement("li");
    li.textContent = `${produto} - R$ ${preco.toFixed(2)}`;

    document.getElementById("listaCarrinho").appendChild(li);
    document.getElementById(
      "totalCarrinho"
    ).textContent = `R$ ${totalCarrinho.toFixed(2)}`;
  });
});

document.getElementById("removerItens").addEventListener("click", () => {
  carrinho = [];
  totalCarrinho = 0;
  document.getElementById("listaCarrinho").textContent = "";
  document.getElementById("totalCarrinho").textContent = "R$ 0,00";
});

const select = document.getElementById("produtos");
const sections = document.querySelectorAll(".produto");

select.addEventListener("change", () => {
  sections.forEach((sec) => (sec.style.display = "none")); // esconde todas
  const escolhido = select.value;
  if (escolhido) {
    document.getElementById(escolhido).style.display = "block"; // mostra só a escolhida
  }
});

document.getElementById("calcular_pedido").addEventListener("click", () => {
  let subtotal = Number(document.getElementById("valor_pedido").value);
  //let subtotal = parseFloat(document.getElementById("totalCarrinho").textContent.replace("R$","").trim());  <-- pegaria o valor do total do carrinho de compras
  let frete = Number(document.getElementById("distancia").value) * 5;
  let total = frete + subtotal;
  document.getElementById(
    "texto_frete"
  ).textContent = `Subtotal: R$ ${subtotal} | Frete: R$ ${frete} | Total: R$ ${total}`;
  console.log(document.getElementById("totalCarrinho").textContent);
});