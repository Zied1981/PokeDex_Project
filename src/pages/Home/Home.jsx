import { useState } from "react";
import "./Home.css";
import Filterpage from "../../components/Filterpage/Filterpage";
import BurgerMenü from "../../components/BurgerMenü/BurgerMenü";

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-menu">
      <BurgerMenü onClick={toggleMenu} />
      {isMenuOpen && <Filterpage />}
    </div>
  )
};

export default Home;
