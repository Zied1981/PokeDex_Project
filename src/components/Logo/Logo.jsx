import { Link } from "react-router-dom";
import logoImg from "/Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <section className="logo">
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
    </section>
  );
};

export default Logo;
