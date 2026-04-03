import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../features";
import search from "../../../assets/images/global/search.svg";

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
    <form className="searchbar navbar__center" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchbar__input"
      />
      <button type="submit" className="searchbar__icon">
        <img src={search} alt="Searchbar Icon" />
      </button>
    </form>
  );
};