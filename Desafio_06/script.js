const nomes = [];
const rgms = [];
const notasParciais = [];
const notasExercicios = [];
const notasProjetos = [];
const notasRegimentais = [];

document.getElementById('cadastrar').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const rgm = document.getElementById('rgm').value;
    const notaParcial = parseFloat(document.getElementById('notaParcial').value);
    const notaExercicios = parseFloat(document.getElementById('notaExercicios').value);
    const notaProjeto = parseFloat(document.getElementById('notaProjeto').value);
    const notaRegimental = parseFloat(document.getElementById('notaRegimental').value);

    if (nome && rgm && !isNaN(notaParcial) && !isNaN(notaExercicios) && !isNaN(notaProjeto) && !isNaN(notaRegimental)) {
        nomes.push(nome);
        rgms.push(rgm);
        notasParciais.push(notaParcial);
        notasExercicios.push(notaExercicios);
        notasProjetos.push(notaProjeto);
        notasRegimentais.push(notaRegimental);
        document.getElementById('formulario').reset();
    }
});

document.getElementById('mostrar').addEventListener('click', () => {
    const tabelaCorpo = document.getElementById('tabelaCorpo');
    tabelaCorpo.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        const notaFinal = calcularNotaFinal(notasParciais[i], notasExercicios[i], notasProjetos[i], notasRegimentais[i]);
        const conceito = obterConceito(notaFinal);
        const novaLinha = tabelaCorpo.insertRow();
        
        novaLinha.insertCell(0).innerText = nomes[i];
        novaLinha.insertCell(1).innerText = rgms[i];
        novaLinha.insertCell(2).innerText = notaFinal.toFixed(1);
        novaLinha.insertCell(3).innerText = conceito;

        if (conceito === "Aprovado") {
            novaLinha.cells[2].classList.add('aprovado');
        } else if (conceito === "Reprovado") {
            novaLinha.cells[2].classList.add('reprovado');
        } else {
            novaLinha.cells[2].classList.add('avaliacao-final');
        }
    }

    document.getElementById('tabelaContainer').style.display = 'block';
});

function calcularNotaFinal(notaP, notaE, notaProj, notaR) {
    return notaP + notaE + notaProj + notaR;
}

function obterConceito(notaFinal) {
    if (notaFinal >= 6) {
        return "Aprovado";
    } else if (notaFinal >= 4) {
        return "Avaliação Final";
    } else {
        return "Reprovado";
    }
}
