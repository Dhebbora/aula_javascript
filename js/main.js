/* Aula 01 */



/*var nome = "Dhebbora Vasconcelos";
var idade = "27";
var idade2 = "10";
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase()); Ele coloca as palavras em maiúsculas
console.log(frase.toLowerCase()); Ele coloca as palavras em minúsculas
//alert(frase.replace("Japão", "Brasil"));  Ele troca a palavra */




/* Aula 02 */




//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); ele adiciona item na lista
//lista.pop(); ele retira item da lista 

//console.log(lista);
/*console.log(lista.toString()); Ele transforma o array em string ou seja ele n imprime uma
palavra compoleta ele mostrará apenas uma letra*/

//console.log(lista.join(" - ")); O que fica no meio das " " mostra na string, ele tbm transforma em string
//console.log(lista.lenght);  Ele mostra quantos itens tem na lista
//console.log(lista.reverse());  Ele mostra o item de trás pra frente

 // Dicionário 

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/




/* Aula 03 */



//Condicionais

/*var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var idade = prompt("Qual a sua idade, meu anjo?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}; 
*/ //O prompt ele mostra uma pergunta para que o usuário responda

// Laços de repetição - while e For

/*
var count = 0;
while (count <=5){ //Essa é uma estrutura de repetição ele mostra na tela o número de vezes que é chamado 
    console.log(count);
    alert(count); aqui ele mosra o resultado em forma de alerta
    count++;
}
*/ 
/*
var count = 0;
while (count <=5){ //Essa é uma segunda estrutura de repetição
    console.log(count);
    count =  count + 1;
}
*/ 
/*
 var count;
 for(count = 0; count <=5; count ++)
 alert(count);
 */

 // Datas

 /*
 var d = new Date();
 alert(d);
 */ // mostra o dia , hora, local.

 /*
 var d = new Date();
 alert(d.getMonth()+1); // O month ele sempre conta do 0 ai tem q adicionar sempre o +1 
 */ //O month mostra o mês

 /*
 var d = new Date();
 alert(d.getMinutes()); 
 */ // mostra os minutos

  /*
 var d = new Date();
 alert(d.getDay()); 
 */ // mostra os dias

  /*
 var d = new Date();
 alert(d.getHours()); 
 */ // mostra as horas




 /* Aula 04 */



 // funçao

 /*
 function soma(n1, n2){
     return n1 + n2;
 } 
 alert(soma(5, 10));
*/ // Aqui ele faz as somas das variáveis

// Função para fazer replace

 /*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão",  "Japão", "Brasil"));
*/

// Função LOCAL E GLOBAL 

/*
function validaIdade(idade){
    var validar; // Esse validar aqui que fica  dentro é LOCAL
    if (idade >= 18){
    validar = true
}else{
    validar = false
}
return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*
var validar; // Esse validar aqui em cima é GLOBAL 
function validaIdade(idade){
    if (idade >= 18){
    validar = true
}else{
    validar = false
}
return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/



/* Aula 05 */

/*
function clicou(){
    alert("Obrigada por clicar")
} // Esse alerta aqui é ligado com o HTML e ele cria um botão e dá um aviso 
*/


/*
function clicou(){
    document.getElementById("agradecida");
    console.log(document.getElementById("agradecida"));
}
*/ // aqui mostra no console o "agradecida" depois que clicar no botão

/*
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>"; // o inner ele 
    //faz com que o docuemnto altera dentro do HTML 
}
*/ // aqui mostra no console o "agradecida" depois que clicar no botão



/*
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>";
}

function redirecionar(){
    //window.open("https://github.com/Dhebbora/"); // primeira forma para redirecionar
    //window.location.href = "https://github.com/Dhebbora/"; // segunda forma para redirecionar
}
*/ //Aqui ele redireciona para uma outra página 


/* // Essa função todinha aqui é pra trocar o texto qnd passa o mouse em cima
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>";
}

function redirecionar(){
    window.open("https://github.com/Dhebbora/"); // primeira forma para redirecionar
}

function trocar(){
    document.getElementById("mousemoove").innerHTML = "obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemoove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}
*/

// Aqui se usa o elemento porém coloca-se o THIS lá no arquivo HTML ( olha lá)
/*
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>";
}
function redirecionar(){ // redireciona par outra pagina
    window.open("https://github.com/Dhebbora/");
}
function trocar(elemento){ // troca o texto por outro passado
    elemento.innerHTML = "obrigada por passar o mouse";
}
function voltar(elemento){ // volta para o mesmo texto de antes de passar o mouse
    elemento.innerHTML = "Passe o mouse aqui"; 
}
*/

/* //Isso aqui tudinho foi pra colcoar o aviso de pagian carregada
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>";
}
function redirecionar(){
    window.open("https://github.com/Dhebbora/");
}
function trocar(elemento){
    elemento.innerHTML = "obrigada por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"; 
}
function load(){ // AQui ele mostra o aviso quando a página for casrregada
    alert("Página carregada"); 
}
*/

/*
function clicou(){
    document.getElementById("agradecida").innerHTML = "<b>Obrigada por clicar!</b>";
}
function redirecionar(){
    window.open("https://github.com/Dhebbora/");
}
function trocar(elemento){
    elemento.innerHTML = "obrigada por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"; 
}
function load(){ // AQui ele mostra o aviso quando a página for casrregada
    alert("Página carregada");
}

function funcaoChange(elemento){ //aqui ele mostra um combo de opções
    console.log(elemento.volue);
}
*/ 
