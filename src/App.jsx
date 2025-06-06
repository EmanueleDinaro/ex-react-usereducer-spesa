import { useState } from "react";
import products from "./array";

export default function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isAvaiable = addedProducts.find(
      (newProduct) => newProduct.name === product.name
    );
    if (isAvaiable) {
      updateProductQuantity(product);
    } else {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const newCart = addedProducts.filter(
      (product) => product.name !== productToRemove.name
    );
    setAddedProducts(newCart);
  };

  const updateProductQuantity = (product) => {
    const updatedCart = addedProducts.map((newProduct) => {
      if (newProduct.name === product.name) {
        return { ...newProduct, quantity: newProduct.quantity + 1 };
      }
      return newProduct;
    });
    setAddedProducts(updatedCart);
  };

  const total = addedProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} - €{product.price}
            <button onClick={() => addToCart(product)}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>

      {addedProducts.length > 0 && (
        <>
          <h2>Carrello</h2>
          <ul>
            {addedProducts.map((product) => (
              <li key={product.name}>
                {product.name} - €{product.price} x {product.quantity}
                <button onClick={() => removeFromCart(product)}>
                  Rimuovi dal carrello
                </button>
              </li>
            ))}
          </ul>
          <h3>Totale: {total.toFixed(2)}€</h3>
        </>
      )}
    </div>
  );
}
