//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = [];
const listaAmigosElemento = document.getElementById("listaAmigos");
const resultadoElemento = document.getElementById("resultado");

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    listaAmigosElemento.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElemento.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    resultadoElemento.innerHTML = `<li>🎉 ${amigoSorteado} foi sorteado! 🎉</li>`;
}

// Permitir adicionar com "Enter"
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});
