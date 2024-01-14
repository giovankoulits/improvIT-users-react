import { useState } from "react";
import userPic from "../../assets/user.jpg";
import "./accordion.css";

const Accordion = ({ users }) => {
  const [open, setOpen] = useState(null);

  function toggle(index) {
    if (index === open) {
      return setOpen(null);
    }
    setOpen(index);
  }

  return (
    <section className="accordion">
      <div className="container">
        {users.map((user, i) => {
          return (
            <div key={i} className="accordion__item">
              <div onClick={() => toggle(i)} className="accordion__title">
                <h3>{user.name}</h3>
                <div
                  className={`accordion__toggle-sign ${
                    open === i ? "show" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={
                  open === i ? "accordion__content show" : "accordion__content"
                }
              >
                <img src={userPic} alt="user" />

                <div
                  className={
                    open === i ? "accordion__info show" : "accordion__info"
                  }
                >
                  <h4>{user.name}</h4>
                  <p>
                    {user.address.street}, {user.address.suite}
                  </p>
                  <p>
                    {user.address.zipcode}, {user.address.city}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
