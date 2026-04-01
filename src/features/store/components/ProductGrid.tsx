import { useParams } from "react-router-dom";
import { useStore } from "../context";

export const ProductGrid = () => {
  const { category } = useParams();
  const store = useStore();

  console.log("CATEGORY PARAM:", category);
  console.log("CATEGORIES:", store.categories);

  const currentCategory = store.categories.find(
    c => c.path === category
  );

  console.log("FOUND CATEGORY:", currentCategory);

  if (!currentCategory) return <p>No products</p>;

  return (
    <div className="grid">
      {currentCategory.products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};