const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Función genérica que rellena Array con índices a traducir
function getAlphabetIndex(msg,alphabet){
    for(var i =0; i< msg.length;i++){
        for(var j=0; j<alphabet.length; j++){
            if(msg[i] === alphabet[j]){
                indexP = j;
            }
        }
        arrayIndexP.push(indexP);
    }
    return arrayIndexP;
}  

//Función genérica traductora
function getAlphabetResult(array, alphabet, id){
    var resultado = "";
    for(var i=0; i< array.length; i++){
        for(var j=0; j< alphabet.length; j++){
            if(array[i] === j){
                indexE = alphabet[j];
            }
        }
        resultado += indexE;
    }
    document.getElementById(id).innerText = resultado; 
}

///////////////////////////////////////Traducir Plain a Encrypted///////////////////////////////////

var indexP;
var arrayIndexP = [];
var indexE;

//Recoger valor textarea texto plano
function getMsgP(){
    var msg = document.getElementById("plainarea").value;
    return msg;
}


var resultE = document.getElementById("btnEncrypt").addEventListener("click", event = () => getAlphabetResult((getAlphabetIndex(getMsgP(), plainAlphabet)), encryptedAlphabet, "encryptedarea"));

////////////////////////////////Traducir Encrypted a Plain////////////////////////////////////////////
var indexE1;
var arrayIndexE = [];
var indexP1;

//Recoger valor textarea encriptada
function getMsgE(){
    var msg =document.getElementById("encryptedarea").value;
    return msg;
    }

var resultP = document.getElementById("btnDecrypt").addEventListener("click", event = () => getAlphabetResult((getAlphabetIndex(getMsgE(), encryptedAlphabet)),plainAlphabet, "plainarea"));


////////////////////////////////GENERADOR ALEATORIO//////////////////////////////

var myArray = [];

function getRandomNumber(n, min, max){
    var range = max - min + 1
    for(var i=0; i<n; i++){
            var random = Math.ceil(Math.random() * range);
            if(myArray.indexOf(random) < 0){
                myArray.push(random);
            } 
    }
    if(myArray.length === n){
        console.log(myArray);
    }else{
        console.log("Por favor refresque navegador para volver a generar un Array con sus condiciones");
    }   
}

 
getRandomNumber(10, 1, 100);


