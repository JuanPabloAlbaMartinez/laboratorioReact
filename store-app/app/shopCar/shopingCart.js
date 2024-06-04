const shoppingCart = [];

// manejamos la logica del carrito y el boton 

// Función para agregar un producto al carrito
export function addShopCar(product) {
    shoppingCart.push(product);
    alert(`El producto: ${product.title} ha sido agregado al carrito`);
    alert(`Tienes: ${shoppingCart.length} productos en el carrito`);
    console.log('Carrito actualizado:', shoppingCart);
    return shoppingCart;
}

export default shoppingCart;