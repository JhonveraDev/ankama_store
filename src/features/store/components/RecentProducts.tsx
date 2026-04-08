import { Link } from "react-router-dom";
import { useRecentProducts } from "../";

export const RecentProducts = () => {
  const products = useRecentProducts();

  if (products.length === 0) return null;

  return (
    <div className="recent-products">
      <h2>Recently Viewed</h2>
      <div className="recent-products__grid">
        {products.map(product => (
          <Link
            key={product!.slug}
            to={`/store/${product!.game}/${product!.category}/${product!.slug}`}
          >
            <img src={product!.image} alt={product!.name} />
            <p>{product!.name}</p>
            <p>${product!.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};