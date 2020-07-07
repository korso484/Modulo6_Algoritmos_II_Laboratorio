var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


//Recoger valor textarea texto plano
function getMsgP(){
//document.getElementById("encryptedarea").value = "";
var msg = document.getElementById("plainarea").value;
return msg;
}


//Traducir Plain a Encrypted
var indexP;
var arrayIndexP = [];
var indexE;

function getPlainIndex(msg){
        for(var i =0; i< msg.length;i++){
            for(var j=0; j<plainAlphabet.length; j++){
                if(msg[i] === plainAlphabet[j]){
                    indexP = j;
                }
            }
            arrayIndexP.push(indexP);
        }
        return arrayIndexP;
    }  


function getEncryptedResult(array){
    var resultado = "";
    for(var i=0; i< array.length; i++){
        for(var j=0; j< encryptedAlphabet.length; j++){
            if(array[i] === j){
                indexE = encryptedAlphabet[j];
            }
        }
        resultado += indexE;
    }
    document.getElementById("encryptedarea").innerText = resultado; 
}

var resultE = document.getElementById("btnEncrypt").addEventListener("click", event = () => getEncryptedResult(getPlainIndex(getMsgP())));




//Traducir Encrypted a Plain
var indexE1;
var arrayIndexE = [];
var indexP1;

//Recoger valor textarea encriptada
function getMsgE(){
    var msg =document.getElementById("encryptedarea").value;
    return msg;
    }

function getEncryptedIndex(msg){
    for(var i =0; i< msg.length;i++){
        for(var j=0; j<encryptedAlphabet.length; j++){
            if(msg[i] === encryptedAlphabet[j]){
                indexE1 = j;
            }
        }
        arrayIndexE.push(indexE1);
    }
    return arrayIndexE;
}


function getPlainResult(array){
    var resultado = "";
    for(var i=0; i< array.length; i++){
        for(var j=0; j< plainAlphabet.length; j++){
            if(array[i] === j){
                indexP1 = plainAlphabet[j];
            }
        }
        resultado += indexP1;
    }
    document.getElementById("plainarea").innerText = resultado; 
    
}

var resultP = document.getElementById("btnDecrypt").addEventListener("click", event = () => getPlainResult(getEncryptedIndex(getMsgE())));





















