import { useParams, useSearchParams } from "react-router-dom";
import { useStore } from "../context";

export const ProductGrid = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const store = useStore();

  const currentCategory = store.categories.find(
    c => c.path === category
  );

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
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};