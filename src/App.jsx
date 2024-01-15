import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import Loader from "./components/Loader/Loader";
import Search from "./components/Search/Search";
function App() {
  return (
    <>
      <Header />
      <Search />
      <Loader />
      <Accordion />
    </>
  );
}

export default App;
