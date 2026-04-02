import { useParams, useSearchParams, Link } from "react-router-dom";
import { useCurrentGame } from "../";

export const ProductGrid = () => {
  const { game, category } = useParams();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const currentGame = useCurrentGame();

  const currentCategory = currentGame?.categories.find(c => c.path === category);

  if (!currentCategory) return <p>No products</p>;

  let products = currentCategory.products;

  if (search) {
    products = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="grid">
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