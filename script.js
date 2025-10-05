 function enviarWhats(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        const telefone = "onumeroaqui";
        const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);
        window.open(`https://wa.me/${telefone}?text=${msgFormatada}`, "_blank");
      }