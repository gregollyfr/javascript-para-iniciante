/*
function areaQuadrado(side){
  return side * side;
}

console.log(areaQuadrado(2));

function imc(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(1.9, 104));


function corFavorita(cor) {
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function(){
  console.log('Oi');
});

function imc2(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80);
console.log(imc2(80, 1.80));

function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor preencha um numero';
  } else if(idade >= 60) {
    //console.log('É idoso');
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(20));

function faltaVisitar(paisesvisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesvisitados} países`;
}

console.log(totalPaises);
*/


// exercicios da aula
var nomeExercicio = 'joaquim';
function RetornaT() {
  if (nomeExercicio = 'joaquim');
  return true;
}
console.log(RetornaT());

function perimetroQuadrado(lado) {
  const MultQuadrados = (lado * 4);
  console.log(MultQuadrados);
}
perimetroQuadrado(20);

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return true;
  } else {
    return false;
  }
}

function tipoDeDado(dado) {
  return typeof dado;
}

addEventListener('click', function(){
  console.log('Gregolly França');
});