const AccordionItem = ({ user, i, toggle, open, userPic }) => {
  return (
    <div className="accordion__item">
      <div onClick={() => toggle(i)} className="accordion__title-box">
        <h3>{user.name}</h3>
        <div className={`accordion__toggle-sign ${open === i ? "show" : ""}`}>
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
          className={open === i ? "accordion__info show" : "accordion__info"}
        >
          <h4>{user.name}</h4>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.zipcode}, {user.address.city}
          </p>
          <p>{user.country}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
