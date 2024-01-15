import { useEffect, useState, createContext, useContext } from "react";

export const UsersContext = createContext(null);

export function useUsers() {
  return useContext(UsersContext);
}

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const usersRequest = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = await usersRequest.json();
      const usersCoords = usersData.map((user) => user?.address?.geo);

      const userCountries = await Promise.all(
        usersCoords.map(({ lat, lng }) => {
          const latNoDecimal = lat.split(".")[0];
          const lngNoDecimal = lng.split(".")[0];
          return fetch(
            `http://api.weatherapi.com/v1/current.json?key=ede2e8fcee9042748dd214945241301&q=${latNoDecimal},${lngNoDecimal}`
          ).then((res) => res.json());
        })
      );

      usersData.forEach(
        (user, i) => (user.country = userCountries[i].location.country)
      );
      setLoading(false);
      setUsers(usersData);
    };

    fetchUserData().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  function toggleAccordion(index) {
    if (index === open) {
      return setOpen(null);
    }
    setOpen(index);
  }

  const value = {
    loading,
    handleChange,
    searchInput,
    users,
    toggleAccordion,
    open,
    error,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
