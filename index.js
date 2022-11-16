//Clase Usuario


class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullNombre() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascotas(mascotas) {
        this.mascotas.push(mascotas);
    }
    getMascotas() {
        return this.mascotas.map((mascotas) => `${mascotas}`);
    }
    countMascotas(){
        return this.mascotas.lenght;
    }

    
    getBookNames(){
        return this.libros.map((libros)=> `${libros.nombreLibro}, ${libros.autor}`)
    }
    addBookNames(nombreLibro, autor) {
        this.libros.push({nombreLibro: nombreLibro, autor: autor});
    }
}

const newUsuario = new Usuario('Alejo', 'Garcia',
    [{ nombreLibro: 'StarWars', autor: 'George Lucas' }, { nombreLibro: 'Harry Potter', autor: 'j.k Rowling' }],
    ['Perro', 'gato']
);


console.log(newUsuario.getFullNombre())

newUsuario.addMascotas("Tortuga");
console.log(newUsuario.getMascotas());

newUsuario.addBookNames("Persy Jackson","Rick Riordan");
console.log(newUsuario.getBookNames());
