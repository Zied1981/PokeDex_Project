import { useState } from "react";
import "./Home.css";
import Filterpage from "../../components/Filterpage/Filterpage";
import BurgerMenü from "../../components/BurgerMenü/BurgerMenü";
import Logo from "../../components/Logo/Logo";
import Pokecard from "../../components/Pokecard/Pokecard";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Logo />
      <Pokecard />

      <div className="burger-menu">
        <BurgerMenü onClick={toggleMenu} />
        {isMenuOpen && <Filterpage />}
      </div>
    </>
  );
};

export default Home;
