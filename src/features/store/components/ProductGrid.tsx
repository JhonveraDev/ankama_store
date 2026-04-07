import { useParams, useSearchParams, Link } from "react-router-dom";
import { useCurrentGame } from "../";
import { searchProducts } from "../../../features";

export const ProductGrid = () => {
  const { game, category } = useParams();
  const [searchParams] = useSearchParams();
  const currentGame = useCurrentGame();
  const search = searchParams.get("search");
  const currentCategory = currentGame?.categories.find(c => c.path === category);
  const categorieImage = currentGame?.categorieImage;

  if (!currentCategory) return <p>No products</p>;

  let products = currentCategory.products;

  if (search) {
    const fuzzyResults = searchProducts(search).map(r => r.slug);
    products = products.filter(p => fuzzyResults.includes(p.slug));
  }

  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <p className="product-grid__empty">No results found</p>
      ) : (
        products.map(product => (
          <Link
            to={`/store/${game}/${category}/${product.slug}`}
            key={product.id}
            className="product-grid__link"
          >
            <article className="product-card">
              <img
                className="product-card__image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-card__name">
                <img src={categorieImage} alt={currentGame?.game} />
                <h3>{product.name}</h3>
              </div>
              <div className="product-card__price">
                <p>${product.price}</p>
              </div>
            </article>
          </Link>
        ))
      )}
    </div>
  );
};