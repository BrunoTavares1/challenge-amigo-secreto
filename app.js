let amigos = [];
let amigosSorteados = new Set();

document.getElementById("amigo").addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      adicionarAmigo();
   }
});

function adicionarAmigo() {
   let inputAmigo = document.getElementById("amigo");
   let nomeAmigo = inputAmigo.value.trim();

   if (nomeAmigo === "") {
      alert("Por favor, insira um nome.");
      return;
   }

   amigos.push(nomeAmigo);
   inputAmigo.value = "";
   atualizarLista();
   inputAmigo.focus();
}

function atualizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";

   for (let amigo of amigos) {
      let li = document.createElement("li");
      li.textContent = amigo;
      lista.appendChild(li);
   }
}

function sortearAmigo() {
   if (amigos.length === 0) {
      alert("Nenhum amigo foi adicionado para o sorteio.");
      return;
   }

   if (amigosSorteados.size === amigos.length) {
      alert("Todos os amigos já foram sorteados.");
      return;
   }

   let amigoSorteado;
   do {
      let indiceSorteado = Math.floor(Math.random() * amigos.length);
      amigoSorteado = amigos[indiceSorteado];
   } while (amigosSorteados.has(amigoSorteado));

   amigosSorteados.add(amigoSorteado);
   document.getElementById(
      "resultado"
   ).innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`;
}
