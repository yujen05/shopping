// src/ProductCard.jsx
export default function ProductCard({ title, price }) {
  return (
    <div data-testid="product-card">
      <h2>{title}</h2>
      <p>{price}원</p>
    </div>
  );
}
