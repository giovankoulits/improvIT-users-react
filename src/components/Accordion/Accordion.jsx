import userPic from "../../assets/user.jpg";
import AccordionItem from "./AccordionItem";
import { useUsers } from "../../UsersContext";
import "./accordion.css";

const Accordion = () => {
  const { users, toggleAccordion, open, searchInput, error } = useUsers();
  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(searchInput.toUpperCase())
  );

  return (
    <section className="accordion">
      <div className="container">
        {error ? (
          <h2 className="error">ERROR: {error}</h2>
        ) : (
          filteredUsers.map((user, i) => {
            return (
              <AccordionItem
                key={i}
                user={user}
                toggleAccordion={toggleAccordion}
                open={open}
                userPic={userPic}
                i={i}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Accordion;
