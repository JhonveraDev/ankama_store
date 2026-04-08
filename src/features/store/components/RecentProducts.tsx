import { Link } from "react-router-dom";
import { useRecentProducts } from "../";
import { useCurrentGame } from "../";

export const RecentProducts = () => {
  const products = useRecentProducts().filter(Boolean);
  const currentGame = useCurrentGame();
  const categorieImage = currentGame?.categorieImage;

  if (products.length === 0) return null;

  return (
    <div className="recent-products">
      <h2>Recently Viewed Items</h2>
      <div className="recent-products__grid">
        {products.map(product => (
          <Link
            key={product!.slug}
            to={`/store/${product!.game}/${product!.category}/${product!.slug}`}
          >
            <article className="product-card">
              <img className="product-card__image" src={product!.image} alt={product!.name} />
              <div className="product-card__name recent">
                <img src={categorieImage} alt={currentGame?.game} />
                <h3>{product!.name}</h3>
              </div>
              {/* <div className="product-card__price">
                <p>${product!.price}</p>
              </div> */}
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};