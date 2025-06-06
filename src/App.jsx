import { useState } from "react";
import products from "./array";

export default function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isAvaiable = addedProducts.find(
      (newProduct) => newProduct.name === product.name
    );
    if (!isAvaiable) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  };

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
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
