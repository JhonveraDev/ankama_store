import { useParams } from "react-router-dom";
import { useStore } from "../context";

export const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const store = useStore();

  const currentCategory = store.categories.find(
    c => c.path === category
  );

  const product = currentCategory?.products.find(
    p => p.id === Number(productId)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} />

      <h1>{product.name}</h1>

      <p>Price: ${product.price}</p>

      {product.originalPrice && (
        <p style={{ textDecoration: "line-through" }}>
          ${product.originalPrice}
        </p>
      )}

      {product.discount && (
        <p>Discount: {product.discount}%</p>
      )}
    </div>
  );
};