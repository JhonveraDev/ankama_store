import { useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useCurrentGame } from "../";
import { addRecentProduct } from "../hooks/useRecentProducts";
import cart from "../../../assets/images/global/shop_cart.svg";

export const ProductDetailPage = () => {
  const { game, category, slug } = useParams();
  const navigate = useNavigate();
  const currentGame = useCurrentGame();
  const categorieImage = currentGame?.categorieImage;

  const currentCategory = currentGame?.categories.find(c => c.path === category);
  const product = currentCategory?.products.find(p => p.slug === slug);

  useEffect(() => {
    if (product && game && category && slug) {
      addRecentProduct(slug, game, category);
    }
  }, [slug]);

  if (!product) return <Navigate to="/404" replace />;

  return (
    <div className="product-detail">
      <img src={product.thumbImage} alt={product.name} />

      <div className="product-detail__info">
        <div className="product-detail__info-top">
          <img src={categorieImage} alt={currentGame?.game} />
          <h1>{product.name}</h1>
        </div>

        <div className="product-detail__pricing">
          <p className="product-detail__price">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'COP',
            }).format(product.price)}
          </p>
        </div>

        <div className="product-detail__buy">
          <button>
            BUY
          </button>
        </div>
      </div>

    </div>
  );
};