import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <section className="logo">
      <Link to="/">
        <img src="./src/assets/Logo.png" alt="logo" />
      </Link>
    </section>
  );
};

export default Logo;
