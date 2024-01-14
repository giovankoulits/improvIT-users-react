import "./search.css";
/* import useLogic from "../../useLogic"; */
import searchIcon from "../../assets/search.png";
const Search = ({ handleChange, searchInput, users }) => {
  /*   const { handleChange, searchInput, users } = useLogic(); */
  return (
    <section className="search">
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
