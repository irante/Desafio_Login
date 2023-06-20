class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct({ title, descripcion, price, thumbnail, code, stock }) {
    const id = this.products.length + 1;
    const resultado = this.products.find((el) => el.code === code);

    if (resultado) {
      console.error("******* El codigo de producto ya existe ********");
    } else {
      this.products.push({
        title,
        descripcion,
        price,
        thumbnail,
        code,
        id,
        stock,
      });
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const RtadoBusqueda = this.products.find((el) => el.id === id);
    
    let respuesta = RtadoBusqueda??"NOT FOUND"
   
    return respuesta;
  }
}

const producto1 = new ProductManager();

producto1.addProduct({
  title: "mouse",
  descripcion: "mouse Logitech",
  price: 7600,
  thumbnail: "./mouse.jpg",
  code: "abc123",
  stock: 15,
});
producto1.addProduct({
  title: "teclado",
  descripcion: "teclado Microsoft",
  price: 17600,
  thumbnail: "./teclado.jpg",
  code: "a5bc123",
  stock: 3,
});

console.table(producto1.getProducts());
console.table(producto1.getProductById(2));
