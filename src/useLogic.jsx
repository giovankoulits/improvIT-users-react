import { useEffect, useState } from "react";

const useLogic = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const usersRequest = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await usersRequest.json();
      const coords = userData.map((user) => user?.address?.geo);

      const userCountries = await Promise.all(
        coords.map(({ lat, lng }) => {
          const latNoDecimal = lat.split(".")[0];
          const lngNoDecimal = lng.split(".")[0];
          return fetch(
            `http://api.weatherapi.com/v1/current.json?key=ede2e8fcee9042748dd214945241301&q=${latNoDecimal},${lngNoDecimal}`
          ).then((res) => res.json());
        })
      );

      userData.forEach(
        (user, i) => (user.country = userCountries[i].location.country)
      );
      setUsers(userData);
      setLoading(false);
    };

    fetchUserData().catch(console.error);
  }, []);

  function toggle(index) {
    if (index === open) {
      return setOpen(null);
    }
    setOpen(index);
  }

  return {
    loading,
    handleChange,
    searchInput,
    users,
    toggle,
    open,
  };
};

export default useLogic;
