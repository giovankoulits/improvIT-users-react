import "./header.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <section>
      <div className="nav__top-bar"></div>
      <nav className="nav">
        <div className="nav__main">
          <img src={logo} alt="Logo" />
          <h1>Team Members</h1>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
