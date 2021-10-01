class testimonio {
    constructor (nombre, testimonio){
        this.nombre = nombre;
        this.testimonio = testimonio;

    }
}

class nombreCliente {
    constructor (nombre) {
        this.nombre = nombre;
    }
}

agregarNombre (){
    const guardarNombre = JSON.parse(LocalStorage.getItem ( ` ${ this.nombre } ` ));

}

actualizarDatos () {
    localStorage.setItem( ` ${ this.nombre } `, JSON.stringify(this.testimonio));
}

agregarTestimonio (){
    const section = document.createElement ("section");
    const nombreCliente = document.createElement ("h2");
    nombreCliente.textContent = `nombre ${this.nombre}`;
    section.appendChild(nombreCliente);
    const testimonioCliente = document.createElement ("p");
    testimonioCliente.textContent = `${this.testimonio}`;
    
}


const consultarNombre = () => prompt ('Ingrese su nombre');


const agregarTestimonio = (nombre) =>{
    while (consultarNombre()){
        const testimonios = new testimonio (prompt ('nombre'), prompt('testimonio'));
        alert (nombre.agregarTestimonio(testimonios))
    }
}

function comenzar () {
    const nombre = new nombreCliente (prompt("Nombre cliente"));
    nombre.agregarNombre ();
    agregarTestimonio(nombre);
    nombre.agregarTestimonio();
}


comenzar();