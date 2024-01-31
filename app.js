let textTextArea;
let newWord = "";

const hiddenAndShowDiv = mensaje => {
    let areaEmpty = document.getElementById("area-empty");
    let areaEncripted = document.getElementById("area-encripted");
    areaEmpty.style.display = "none";
    areaEncripted.style.display = "flex";
    let pasteText = document.getElementById("message-encripted");
    pasteText.value = mensaje;
}

const handleEncriptar = () => {
    textTextArea = document.getElementById("text-to-encrypted").value;
    
    // Verificar si el textarea está vacío
    if (textTextArea.trim() === "") {
        let error = document.getElementById("message-error");
        let iconError = document.getElementById("i-error");
        error.textContent = "Por favor ingrese algo antes de encriptar";
        error.style.color = "red";
        iconError.style.color = "red";
        return;
    }
    
    newWord = "";
    for (let letter of textTextArea) {
        switch (letter){
            case 'a': newWord += 'ai'; break;
            case 'e': newWord += 'enter'; break;
            case 'i': newWord += 'imes'; break;
            case 'o': newWord += 'ober'; break;
            case 'u': newWord += 'ufat'; break;
            default: newWord+= letter;
        }
    }
    hiddenAndShowDiv(newWord);
    document.getElementById("text-to-encrypted").value = "";
    document.getElementById("btn-copyArea").textContent = "Copiar"
}

const desencriptarMensaje = mensaje => {
    return mensaje
    .replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u')
}

const handleDesencriptar = () => {
    textTextArea = document.getElementById("text-to-encrypted").value;
    // Verificar si el textarea está vacío
    if (textTextArea.trim() === "") {
        let error = document.getElementById("message-error");
        let iconError = document.getElementById("i-error");
        error.textContent = "Por favor ingrese algo antes de desencriptar";
        error.style.color = "red";
        iconError.style.color = "red";
        return; // Salir de la función si el textarea está vacío
    }

    document.getElementById("message-encripted").value = "";
    textTextArea = document.getElementById("text-to-encrypted").value;

    let messageDecrypted = desencriptarMensaje(textTextArea)
    
    hiddenAndShowDiv(messageDecrypted);
    document.getElementById("text-to-encrypted").value = "";
    document.getElementById("btn-copyArea").textContent = "Copiar"
}


// Obtener el elemento del textarea
const textArea = document.getElementById("text-to-encrypted");

// Agregar un evento de escucha para el evento "input"
textArea.addEventListener("input", function(event) {
    const textoIngresado = textArea.value;
    validarTexto(textoIngresado);
});

// Función para validar el texto ingresado y mostrar una alerta si contiene letras mayúsculas o con tilde
function validarTexto(texto) {
    let error = document.getElementById("message-error");
    let iconError = document.getElementById("i-error");
    let botonEncriptar = document.querySelector(".btn-encriptar");
    let btnDecrypted = document.querySelector(".btn-desencriptar");
    // Verificar si el texto contiene letras mayúsculas o con tilde
    if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
        error.textContent = "Solo letras minusculas y sin acento";
        error.style.color = "red";
        iconError.style.color = "red";
        botonEncriptar.disabled = true;
        btnDecrypted.disabled = true;
        // document.getElementById("btn-copyArea").textContent = "Copiar"
    }
    else{
        error.textContent = "Solo letras minusculas y sin acento";
        error.style.color = "#495057";
        iconError.style.color = "#495057";
        botonEncriptar.disabled = false;
        btnDecrypted.disabled = false;
        // document.getElementById("btn-copyArea").textContent = "Copiar"
    }
}


const btnCopy = () => {
    let areaToCopy = document.getElementById("message-encripted").value;
    navigator.clipboard.writeText(areaToCopy);

    document.getElementById("btn-copyArea").textContent = "Copiado"
}