document.getElementById("cadastro").addEventListener('submit',(e)=>{
    e.preventDefault()
    const numeroloja = 5516993048410
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const data_nascimento = document.getElementById("data_nascimento").value
    const rua = document.getElementById("rua").value
    const numero = document.getElementById("numero").value
    const bairro = document.getElementById("bairro").value
    const cep = document.getElementById("cep").value
    const favorito = document.querySelectorAll("input[name='produtosfavoritos']:checked")
    const favoritos_selecionados = Array.from(favorito).map(favorito => favorito.value)
    const aceita = document.querySelector('#aceita').value
    let mensagem = `Novo Cadastro\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nData de nascimento: ${data_nascimento}\nRua: ${rua}\nNº: ${numero}\nBairro: ${bairro}\nCEP: ${cep}\nProdutos favoritos: ${favoritos_selecionados}\nAceita receber e-mail?: ${aceita}\n`
    const url = `https://wa.me/${numeroloja}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
})
