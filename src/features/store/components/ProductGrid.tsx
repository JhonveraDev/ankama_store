import { useParams, useSearchParams, Link } from "react-router-dom";
import { useCurrentGame } from "../";
import { searchProducts } from "../../../features";

export const ProductGrid = () => {
  const { game, category } = useParams();
  const [searchParams] = useSearchParams();
  const currentGame = useCurrentGame();
  const search = searchParams.get("search");
  const currentCategory = currentGame?.categories.find(c => c.path === category);

  if (!currentCategory) return <p>No products</p>;

  let products = currentCategory.products;

  if (search) {
    const fuzzyResults = searchProducts(search).map(r => r.slug);
    products = products.filter(p => fuzzyResults.includes(p.slug));
  }

  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <p>No results found</p>
      ) : (
        products.map(product => (
          <Link
            to={`/store/${game}/${category}/${product.slug}`}
            key={product.id}
          >
            <div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};