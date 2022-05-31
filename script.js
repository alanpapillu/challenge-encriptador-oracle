const inputTexto = document.querySelector(".textarea-izq");

const mensaje = document.querySelector(".textarea-der");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    document.getElementById("rectan").style.display = "none"
}

function encriptar(stringParaEncriptar){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    inputTexto.value = "";
    for (let i = 0; i< matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringParaDesencriptar){

    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    inputTexto.value = "";
    for (let i = 0; i< matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
}

function areaOcultar(){
    document.getElementById("rectan").style.display = "none"
}

function btnCopiar(){
    var contenido = document.getElementById("textoEncriptado");

    contenido.select();
    document.execCommand("copy");
}