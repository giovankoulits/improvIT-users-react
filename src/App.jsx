import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import Loader from "./components/Loader/Loader";
import Search from "./components/Search/Search";
import useLogic from "./useLogic";

function App() {
  const { handleChange, loading, searchInput, users, toggle, open } =
    useLogic();

  return (
    <>
      <Header />
      {!loading && (
        <Search
          handleChange={handleChange}
          searchInput={searchInput}
          users={users}
        />
      )}
      <Loader loading={loading} />
      <Accordion
        users={users}
        searchInput={searchInput}
        toggle={toggle}
        open={open}
      />
    </>
  );
}

export default App;
