const fs = require('fs');

class Contenedor {
    static contadorId = 0;

    constructor( nombreArchivo ){
        this.archivo = nombreArchivo;
        this.id = ++Contenedor.contadorId;
    }

    save( objeto ){
        const arrayProductos = this.getAll();
        
        objeto.id = this.id;
        
        arrayProductos.push(objeto);

        try{

            fs.writeFileSync(`${this.archivo}.txt`, JSON.stringify(arrayProductos, null, 2));

        } catch {

            console.error('No se pudo escribir el archivo');

        }
    }

    getById(id) {

        const arrayProductos = this.getAll();
        
        return arrayProductos.find(producto => producto.id === id) || null;
    }

    deleteById(id) {
        const arrayProductos = this.getAll();
    
        const deleted = arrayProductos.filter(producto => producto.id !== id);
        
        try{
            
            fs.writeFileSync('productos.txt', JSON.stringify(deleted,null,2));

        } catch(error){
            
            throw new Error('No se pudo eliminar el producto');

        }
    }

    getAll ( ){
        const productos = fs.readFileSync(`${this.archivo}.txt`, 'utf-8');
        
        return JSON.parse(productos);
    }

    deleteAll(){
        const data = [];

        try{
        
            fs.writeFileSync('productos.txt', JSON.stringify(data,null,4));

        }catch(error){

            throw new Error('No se pudo eliminar el producto');
            
        }
    }
}

const producto01 = new Contenedor('productos');


producto01.save({
    "title": "OnePlus 9 Pro",
    "price": "270.000",
    "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_754236-MLA48389889068_112021-O.webp",
})



//Buscar elemento por id
// console.log(producto01.getById(213123));
// eliminar producto por id
// producto01.deleteById(213123);
// //Mostrar todos los productos
// console.log(producto01.getAll())
// //eliminar todos los elementos
// producto01.deleteAll();