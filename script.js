const formulario = document.querySelector("#formulario");

let nome = document.querySelector("#nome");
let rNome = document.querySelector("#nomeAluno");
let idade = document.querySelector("#idade");
let rIdade = document.querySelector("#idadeAluno");


let nota1 = document.querySelector("nota1");
let rNota1 = document.querySelector("#n1Aluno")
let nota2 = document.querySelector("nota2");
let rNota = document.querySelector("#n2Aluno");
let nota3 = document.querySelector("nota3");
let rnota3 = document.querySelector("#n3Aluno");


let media =0;
let mediaAluno = document.querySelector("#mediaAluno");
let situacao = "Aprovado";
let fsituacao = docuemnt.querySelector("#situacaoAluno");


formulario.addEventListener("submit", function (evento)  {
    evento.preventDefault();


    nomeAluno.textContent = "Nome do aluno " + nome.value;
    rIdade.textContent = "Idade do aluno " + idade.value;
    rNota1.textContent = "1ª nota do aluno: " + nota1.value;
    rNota2.textContent = "2ª nota do aluno " + nota2.value;
    rNota3.textContent = "3ª nota do aluno" + nota3.value;


    media = (Number(nota1.value) + Numeber(nota2.value) + number(nota3.value)) /3;
    mediaAluno.textContent = "Media do aluno: " + media.toFixed(2);
    if (media < 7 && media >= 5) {
        situacao = "Em Recuperação";
    } else if (media < 5) {
        situacao = "Reprovado";
    }


    fsituacao.textContent = "Situação do Aluno: " + situacao;
});