/*

Crie uma classe Aluno com as propriedades:
nome: string
idade: number
altura: number
sexo: string

Depois crie um array e preencha-o
com alguns objetos da classe Aluno, e crie as
seguintes funções:

● Que exibe quantos alunos com mais de
13 anos tem uma altura menor do
que a média da altura de todos os alunos;

● Que retorne a maior altura entre as mulheres;

● Que retorne o nome do aluno mais novo entre os homens

● Que retorne o primeiro Aluno que tiver a idade par ou tiver mais que 1,90 de altura.

*/
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, altura, sexo) {
        this.Nome = nome;
        this.Idade = idade;
        this.Altura = altura;
        this.Sexo = sexo;
    }
    return Aluno;
}());
var alunos = [];
var aluno = new Aluno("diego", 18, 1.89, "masculino");
alunos[0] = aluno;
var aluno2 = new Aluno("diego alves", 19, 1.78, "feminino");
alunos[1] = aluno2;
var aluno3 = new Aluno("diego teixeira", 17, 1.82, "masculino");
alunos[2] = aluno3;
var aluno4 = new Aluno("diego teixeira", 17, 1.87, "feminino");
alunos[3] = aluno4;
alunosMedia();
AlturaMulheres();
MaisNovo();
function alunosMedia() {
    var mediaAltura;
    mediaAltura = 0;
    var alunosMedia;
    alunosMedia = 0;
    for (var index = 0; index < alunos.length; index++) {
        mediaAltura = mediaAltura + alunos[index].Altura;
    }
    mediaAltura = (mediaAltura / alunos.length);
    for (var inde2 = 0; inde2 < alunos.length; inde2++) {
        if (alunos[inde2].Idade > 13) {
            if (alunos[inde2].Altura < mediaAltura) {
                alunosMedia++;
            }
        }
    }
    console.log(alunosMedia);
}
function AlturaMulheres() {
    var maiorAltura;
    maiorAltura = 0;
    for (var index = 0; index < alunos.length; index++) {
        if (alunos[index].Sexo == "feminino") {
            if (alunos[index].Altura > maiorAltura) {
                maiorAltura = alunos[index].Altura;
            }
        }
    }
    console.log(maiorAltura);
}
function MaisNovo() {
    var MaisNovo;
    MaisNovo = 0;
    var NomeNovo;
    for (var index2 = 0; index2 < alunos.length; index2++) {
        if (alunos[index2].Sexo == "masculino") {
            if (alunos[index2].Idade > MaisNovo) {
                MaisNovo = index2;
            }
        }
    }
    NomeNovo = alunos[MaisNovo].Nome;
    console.log(NomeNovo);
}
function PrimeiroAluno() {
    var cont = 0;
    for (var index = 0; index < alunos.length; index++) {
        if (alunos[index].Idade % 2 == 0 || alunos[index].Altura > 1.90) {
            console.log(alunos[index]);
            index = alunos.length;
        }
    }
}
