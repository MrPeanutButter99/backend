const express = require('express');
const Contenedor = require('./contenedor')

const port = 8080;
const app = express();

const p = new Contenedor('productos');

const getRandomNumber = (max) => {
    number = Math.floor( Math.random() * max );
    return number;
}

app.get('/productos', ( req, res) => {
    res.json(p.getAll());
})

app.get('/productoRandom', ( req, res) => {
    
    const arrayProductos = p.getAll();
    let cantidadProductos = arrayProductos.length;
    let productoRandom = arrayProductos[getRandomNumber( cantidadProductos )];

    res.json(productoRandom);
})  

app.listen( port, () => {
    console.log(`Escuchando puerto http://localhost/${port}`)
})