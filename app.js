//Variables
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre de un amigo");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigo[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigo.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoGanador = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo ganador es: ${amigoGanador}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    amigo = []; 
}
