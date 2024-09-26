let segundos = 0;
setInterval(() => {
    segundos++;
    const minutos = Math.floor(segundos / 60);
    const s = segundos % 60;
    document.getElementById('tempo').innerText = 
        String(minutos).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}, 1000);

let imagemAtual = 0;
const imagens = ['image.jpg','image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

function trocarImagem(direcao) {
    imagemAtual += direcao;
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    } else if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
    document.getElementById('imagem').src = imagens[imagemAtual];
}

function abrirAba(event, abaNome) {
    const conteudos = document.getElementsByClassName('conteudo');
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }
    const abas = document.getElementsByClassName('aba');
    for (let i = 0; i < abas.length; i++) {
        abas[i].className = abas[i].className.replace(' ativo', '');
    }
    document.getElementById(abaNome).style.display = 'block';
    event.currentTarget.className += ' ativo';
}

function mostrarTabuada() {
    const num = document.getElementById('numero').value;
    const resDiv = document.getElementById('resultado');
    resDiv.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        resDiv.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
}
