import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../features";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const results = searchProducts(query);

    if (results.length > 0) {
      const first = results[0];
      navigate(`/store/${first.game}/${first.category}?search=${query}`);
    }
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};