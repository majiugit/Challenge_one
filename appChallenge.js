let amigos = []; // Array que armazena novos amigos

    // Função para adicionar um novo amigo
    function adicionarAmigo() {
      const inputAmigo = document.getElementById("amigo");
      const nomeAmigo = inputAmigo.value.trim(); 
    
      if (nomeAmigo !== "") {
        amigos.push(nomeAmigo); 
        atualizarListaAmigos(); 
        inputAmigo.value = "";
        inputAmigo.focus();
      } else {
        alert("Por favor, insira um nome válido."); 
      }
    }
    // Função para sortear um amigo
    function sortearAmigo() {
      const resultado = document.getElementById("resultado"); 
      resultado.innerHTML = ""; 
    
      if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
    
        // Exibe o amigo sorteado
        const item = document.createElement("li");
        item.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        resultado.appendChild(item);
      } else {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
      }
    }
    // Função para atualizar a lista de amigos exibida no HTML
    function atualizarListaAmigos() {
      const listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = ""; 
    
      amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        // Botão para remover um amigo da lista
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index); 
    
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
      });
    }
    // Função para remover um amigo pelo índice
    function removerAmigo(index) {
      amigos.splice(index, 1); 
      atualizarListaAmigos(); 
    }