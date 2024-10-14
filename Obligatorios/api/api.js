"use strict"

let contenedor = document.getElementById("contenedor");
let productos = [];

fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.forEach(info => {
            productos.push({
                nombre: info.title,
                precio: info.price,
                imagen: info.image
            });

        });
        crearCard(productos);
    })
    .catch(err => console.log(err));

//funcion para crear la card

function crearCard(productos) {
    contenedor.innerHTML = '';
    productos.forEach((info) => {
        //aqui empieza la creacion de la card
        contenedor.innerHTML += `<div class="tarjeta">
                <img src="${info.imagen}" alt="${info.nombre}" class="imgProducto">
                <h3 class="tituloProducto">${info.nombre}</h3>
                <p class="precioProducto">$${info.precio}</p>
                <button class="btn-agregar">Agregar al carrito</button>
            </div>`;
    })
}

