
class Usuario {
    constructor(Nombre, Apellido, Libros, Mascotas) {
      this.nombre = Nombre;
      this.apellido = Apellido;
      this.libros = [Libros];
      this.mascotas = [Mascotas];
    }
    getFullName() {
      return `El nombre del usuario es ${this.nombre + " " + this.apellido}`;
    }
    addMascota(mascota) {
      this.mascotas.push(mascota);
      return this.mascotas;
    }
    countMascotas() {
      return this.mascotas.length;
    }
    addBook(titulo, autor) {
      this.libros.push({ titulo, autor });
    }
    getBooks() {
      return this.libros.map((libro) => ` Titulo : ${libro.titulo} , Auto: ${libro.autor}`);
    }
  }
  
  const res = new Usuario(
    Nombre = 'Ivan',
    Apellido = 'Caceres',
    Libros = {titulo: 'Odisea', autor: 'Homero'},
    Mascotas = {M1:"Perro", M2:"Gato", M3:"Pez"}

  );
  
  res.addMascota("Tortuga");
  res.addBook("Inferno" , "Dan Brown");
  
  console.log(res.getFullName());
  console.log(res.addMascota())
  console.log(res.countMascotas());
  console.log(res.getBooks());