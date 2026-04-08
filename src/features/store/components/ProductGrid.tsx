import { useParams, useSearchParams, Link } from "react-router-dom";
import { useCurrentGame } from "../";
import { searchProducts } from "../../../features";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div
        key={`${category || ""}-${search || ""}`}
        className="product-grid"
        initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};
