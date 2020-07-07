var msg = "hola"; //y:'q
var msgE = ",qeui" //cadiz
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

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
}

getPlainIndex(msg);

function getEncryptedResult(array, msg){
    var resultado = "";
    for(var i=0; i< array.length; i++){
        for(var j=0; j< encryptedAlphabet.length; j++){
            if(array[i] === j){
                indexE = encryptedAlphabet[j];
            }
        }
        resultado += indexE;
    }
    console.log(resultado); 
}

getEncryptedResult(arrayIndexP);

//Traducir Encrypted a Plain
var indexE1;
var arrayIndexE = [];
var indexP1;

function getEncryptedIndex(msgE){
    for(var i =0; i< msgE.length;i++){
        for(var j=0; j<encryptedAlphabet.length; j++){
            if(msgE[i] === encryptedAlphabet[j]){
                indexE1 = j;
            }
        }
        arrayIndexP.push(indexE1);
    }
}

getEncryptedIndex(msgE);













