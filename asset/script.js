document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos el formulario y la sección de productos
    const form = document.querySelector(".form-section__form");
    const productCardsContainer = document.querySelector(".products-section__cards");
  
    // Función para agregar un producto
    const addProduct = (name, price, imageUrl) => {
      // Creamos el nuevo elemento de tarjeta
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Creamos los elementos dentro de la tarjeta
      card.innerHTML = `
        <img src="${imageUrl}" alt="Producto" class="card__image">
        <h2 class="card__title">${name}</h2>
        <div class="card__footer">
          <span class="card__price">${price}</span>
          <button class="card__delete-button" aria-label="Eliminar">
            <img src="./asset/deleteIco.png" alt="Icono Eliminar" class="card__delete-button-ico">
          </button>
        </div>
      `;
  
      // Añadimos la tarjeta a la sección de productos
      productCardsContainer.appendChild(card);
  
      // Agregamos el evento de eliminar a la nueva tarjeta
      const deleteButton = card.querySelector(".card__delete-button");
      deleteButton.addEventListener("click", () => {
        // Elimina la tarjeta completa (el contenedor de la tarjeta)
        productCardsContainer.removeChild(card);
      });
    };
  
    // Función para manejar el envío del formulario
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que el formulario se recargue
  
      // Obtenemos los valores de los campos del formulario
      const name = document.querySelector("#product-name").value;
      const price = document.querySelector("#product-price").value;
      const imageUrl = document.querySelector("#product-image").value;
  
      // Validación básica (puedes agregar más validaciones aquí)
      if (name && price && imageUrl) {
        // Llamamos a la función para agregar el producto
        addProduct(name, price, imageUrl);
  
        // Limpiamos el formulario después de agregar el producto
        form.reset();
      } else {
        alert("Por favor, complete todos los campos.");
      }
    });
  
    // Agregar eventos de eliminar a las tarjetas existentes (en caso de recarga o productos ya presentes)
    const existingDeleteButtons = document.querySelectorAll(".card__delete-button");
    existingDeleteButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest(".card");  // Encontramos el contenedor de la tarjeta
        productCardsContainer.removeChild(card);  // Eliminamos la tarjeta
      });
    });
  });