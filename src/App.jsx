import products from "./array";

export default function App() {
  return (
    <div>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} - €{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
