import "./search.css";
import { useUsers } from "../../UsersContext";
import searchIcon from "../../assets/search.png";

const Search = () => {
  const { handleChange, searchInput, users, loading, error } = useUsers();
  return (
    <section
      style={{ display: loading || error ? "none" : "flex" }}
      className="search"
    >
      <div className="container">
        <div className="search__search-bar">
          <input
            type="text"
            placeholder="Search by name"
            onChange={handleChange}
            value={searchInput}
          />
          <img src={searchIcon} alt="search" />
        </div>
        <div className="search__user-count">
          <h2>{users.length} People</h2>
        </div>
      </div>
    </section>
  );
};

export default Search;
