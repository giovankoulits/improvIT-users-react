import userPic from "../../assets/user.jpg";
import AccordionItem from "./AccordionItem";
import "./accordion.css";
/* import useLogic from "../../useLogic"; */

const Accordion = ({ users, toggle, open, searchInput }) => {
  /* const { users, toggle, open, searchInput } = useLogic(); */
  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(searchInput.toUpperCase())
  );

  return (
    <section className="accordion">
      <div className="container">
        {filteredUsers.map((user, i) => {
          return (
            <AccordionItem
              key={i}
              user={user}
              toggle={toggle}
              open={open}
              userPic={userPic}
              i={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
