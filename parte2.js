
let d = document;
class Book{
    constructor (title,genre,author,read){
        this.titulo = title;
        this.genero = genre;
        this.autor = author;
        this.leido = read;
    }

    agregarLibro(){
        let contenedor = d.getElementById("contenedor");
        console.log(this.titulo,this.genero,this.autor,this.leido);

        if((this.leido == "true")){
            this.leido = "Si"
        }else{
            this.leido = "No"
        }
        contenedor.innerHTML += `
        <h2>Libro: ${this.titulo}</h2>
        <h3>Genero: ${this.genero}</h3>
        <h3>Autor: ${this.autor}</h3>
        <h3>Leido: ${this.leido}</h3>
        <br/>
        <br/>
        `


    }
}


const boton = document.getElementById("boton");
boton.addEventListener("click",()=>{
    let tituloInput = d.getElementById("titulo").value;
    let generoInput = d.getElementById("genero").value;
    let autorInput = d.getElementById("autor").value;
    let leidoInput = d.getElementById("leido").value;

    const Libro1 = new Book(tituloInput,generoInput,autorInput,leidoInput)
    Libro1.agregarLibro();

    
})