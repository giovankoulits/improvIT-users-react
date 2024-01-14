import "./header.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <section>
      <nav className="nav">
        <div className="nav__top-bar"></div>
        <div className="container">
          <div className="nav__main">
            <img src={logo} alt="Logo" />
            <h1>Team Members</h1>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
