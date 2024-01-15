import "./header.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <section>
      <div className="top-bar"></div>

      <nav className="nav">
        <div className="nav__main">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <h1>Team Members</h1>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
