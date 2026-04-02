import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useCurrentGame } from "../";

export const ProductDetailPage = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const currentGame = useCurrentGame();

  const currentCategory = currentGame?.categories.find(c => c.path === category);
  const product = currentCategory?.products.find(p => p.slug === slug);

  if (!product) return <Navigate to="/404" replace />;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)}>← Back</button>

      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>

        {product.originalPrice && (
          <p className="old-price">${product.originalPrice}</p>
        )}

        <p className="price">${product.price}</p>

        {product.discount && (
          <p className="discount">-{product.discount}%</p>
        )}
      </div>
    </div>
  );
};