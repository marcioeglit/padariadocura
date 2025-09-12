document.getElementById("contato").addEventListener('submit',(e)=>{
e.preventDefault()

    const numero = 5516993048410
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const assunto = document.querySelector("#assunto").value
    const mensagem = document.getElementById("mensagem").value
    let msg = `Novo contato\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")

})