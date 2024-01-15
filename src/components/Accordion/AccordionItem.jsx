const AccordionItem = ({ user, i, toggleAccordion, open, userPic }) => {
  return (
    <div className="accordion__item">
      <div onClick={() => toggleAccordion(i)} className="accordion__title-box">
        <h3>{user.name}</h3>
        <div className={`accordion__toggle-sign ${open === i ? "show" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`accordion__content ${open === i ? "show" : ""}`}>
        <img src={userPic} alt="user" />
        <div className={`accordion__info ${open === i ? "show" : ""}`}>
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
