class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullName(){
        console.log(`My full name is ${this.nombre} ${this.apellido}`)
    }

    addMascota(newMascota){
        this.mascotas.push(newMascota)
        console.log(this.mascotas)
    }

    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas.`)
    }

    addBook(propiedad, valor){
        this.libros[propiedad] = valor;
        console.log(this.libros);
    }

    getBookNames(){
        console.log(this.libros.entries());
    }

    
}

const usuario = new Usuario('Nicolas', 'Condoluci',{cienciaFiccion: '1984'}, ['Ruffo', 'Pepa', 'IPA']);
console.log(usuario);
usuario.getFullName();
usuario.addMascota('Coti');
usuario.countMascotas();
usuario.addBook('Filosifía', 'Ética a Nicómaco');