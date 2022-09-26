function subirTela(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

//Evento de Clique

function clicou(){
    alert("Você clicou no botão!")
}

//Evento de teclado

function digitou(){
    alert('Você digitou!');
}
function digitando(){
    alert('Você está dititando!');
}
function digitou(e){
    console.log(e);
}
function teclou(e){
    if(e.keyCode==13){//13=enter
        let texto=document.getElementById("campo").value;
        console.log(texto);
    }
}

//Mudança de estilos
function azul(){
    limpar();
    document.getElementById("titulocomcor").classList.add('azul')
}
function vermelho(){
    limpar();
    document.getElementById("titulocomcor").classList.add('vermelho')
}
function verde(){
    limpar();
    document.getElementById("titulocomcor").classList.add('verde')
}
function limpar(){
    document.getElementById("titulocomcor").classList.remove('azul')
    document.getElementById("titulocomcor").classList.remove('vermelho')
    document.getElementById("titulocomcor").classList.remove('verde')
}



function mostrartelefone(elemento){
    elemento.style.display='none';
    document.getElementById("telefone").style.display="block";
}

//Array
let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];
console.log(carros);

let compras=[
    ['uva', 'pera','maçã'],
    ['arroz', 'feijão']
];
console.log(compras);

//Objeto (1-2) e (2-2)
let carro={
    nome:'Fiat',
    modelo:'Uno',
    peso:'880kg',
    ligado:false,
    ligar:function(){
        this.ligado=true;
        console.log("Ligando o "+this.modelo);
        console.log("VRUM VRUM!");
    },
    acelerar:function(){
        if(this.ligado==true){
        console.log("Riiiiihhhih");
      } else{
        console.log( this.nome+" "+this.modelo+" não está ligado!")
      }
   }
};
console.log("Modelo: "+carro.modelo);
carro.ligar();
carro.acelerar();


let cars=[
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}
];
console.log(cars);

//Projeto Menu de Navegação

function menuToggle(){
    let menuArea = document.getElementById("menu-area");
    if(menuArea.style.width=='200px') {
        menuArea.style.width='0px';
    } else {
        menuArea.style.width='200px';
    }
}

//Switch

let dia = 1;
let diaNome = '';
let semanaNome = '';

switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
}
switch(semana){
    case 6:
    case 7:
        semanaNome= 'Final de Semana';
        break;
    default:
        semanaNome= 'Dia de Semana';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;
document.getElementById("semana").innerHTML = "Hoje é: "+semanaNome;

//Loop For

//For Loop
let texto = '';
for( let i = 1; i <= 10; i++){
    texto = texto + i + '<br/>';
}

document.getElementById('demo').innerHTML = texto;

//For Loop Array
let doces = ['Brigadeiro', 'Beijinho', 'Cajuzinho', 'Paçoca'];

let html = '<ul>';
for(let i in doces){
    html+='<li>'+ doces[i] +'</li>';
}
html+='</ul>';

document.getElementById('demo2').innerHTML = html;

//Loop While
let htmls = '';

let c =1;

while(c <=10){
    htmls += "Número: "+c+"<br/>";
    c++;
}

document.getElementById('demo3').innerHTML = htmls;


