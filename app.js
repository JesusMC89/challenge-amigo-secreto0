document.addEventListener("DOMContentLoaded", function () {
    let listaParticipantes = [];
  
    /**
     * Agrega un nuevo participante al array.
     * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
     */
    function agregarParticipante() {
      let inputNombre = document.getElementById("amigo");
      let nombreParticipante = inputNombre.value.trim();
  
      if (nombreParticipante === "") {
        alert("Por favor, inserte un nombre");
      } else {
        listaParticipantes.push(nombreParticipante);
        inputNombre.value = ""; // Limpia el campo después de agregar
        actualizarListaParticipantes();
      }
    }
  
    /**
     * Actualiza la lista de participantes en el DOM.
     */
    function actualizarListaParticipantes() {
      let listaElementos = document.querySelector("#listaAmigos");
      listaElementos.innerHTML = ""; // Borra el contenido previo
  
      listaParticipantes.forEach((participante) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = participante;
        listaElementos.appendChild(itemLista);
      });
    }
  
    /**
     * Sortea y muestra un participante de manera aleatoria.
     */
    function sortearParticipante() {
      if (listaParticipantes.length === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
        return;
      }
  
      let indiceAleatorio = Math.floor(Math.random() * listaParticipantes.length);
      let resultadoElemento = document.querySelector("#resultado");
      resultadoElemento.innerHTML = `<li>${listaParticipantes[indiceAleatorio]}</li>`;
    }
  
    // Asigna las funciones a los botones para evitar problemas con `onclick`
    document.querySelector(".button-add").addEventListener("click", agregarParticipante);
    document.querySelector(".button-draw").addEventListener("click", sortearParticipante);
  });
  