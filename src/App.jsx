import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await request.json();
      setUsers(data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Loader loading={loading} />
      <Accordion users={users} />
    </>
  );
}

export default App;
