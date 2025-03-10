// Declarar array de strings para guardar los amigos
let amigos = [];

// Esta función agregar un amigo al array "amigos"
function agregarAmigo() {
    // Obtener el objeto <input id="amigo"> del HTML
    let inputAmigo = document.getElementById("amigo");
    // Obtener el valor (string) del input declarado arriba
    let nombreAmigo = inputAmigo.value;

    // Si el input está vacío
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre");
        return; // Detener la función para que no se ejecute lo de abajo
    }

    // Agrega el amigo al final del array
    amigos.push(nombreAmigo);
    // Una vez agregado el amigo al array, vaciar el input HTML
    inputAmigo.value = "";
    // Automáticamente clickea el input de amigo, para volver a escribir
    inputAmigo.focus();
    // Llamar a la función que imprime la lista de amigos en el HTML debajo
    renderizarAmigos();
}

// Muestra la lista de amigos del array en el HTML en formato lista <ul>
function renderizarAmigos() {
    // Obtener el objeto <ul> donde se mostrará la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    // Vaciar la lista
    listaAmigos.innerHTML = "";

    // Por cada amigo en el array
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento <li>
        let liAmigo = document.createElement('li')
        // Al <li> se le asigna el texto correspondiente al amigo del array en indice "i" del ciclo FOR
        liAmigo.textContent = amigos[i]
        // Agregar el <li> creado a la lista <ul>
        listaAmigos.appendChild(liAmigo)
    }

}

// Función que elige aleatoriamente un amigo array
function sortearAmigo() {
    // Si el array de amigos está vacío (longitud igual a 0), mostrar una alerta y detener la función
    if (amigos.length == 0) {
        alert ('no hay amigos para sortear')
        return;
    }
    // Generar un número aleatorio y multiplicarlo por la longitud del array.
    // Esto debido a que los números aleatorios tienen decimales
    let numeroAleatorio = Math.random() * amigos.length;
    // Redondear (hacia abajo) el numero aleatorio
    let numeroRedondeado = Math.floor(numeroAleatorio);
    // Se toma un amigo del array utilizando como índice el número aleatorio
    let amigoSorteado = amigos[numeroRedondeado];

    // Obtener el elemento HTML donde se mostrará el amigo sorteado
    let resultado = document.getElementById("resultado")
    // Asignarle a este elemento texto con un mensaje mostrando el amigo sorteado
    resultado.innerHTML = `Amigo sorteado es ${amigoSorteado}`

    // Finalmente se vacía el array de amigos, para asi empezar de nuevo
    amigos=[]
    // También vaciar el <ul> en el HTML
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}
