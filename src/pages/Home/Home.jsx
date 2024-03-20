import { useState } from "react";
import "./Home.css";
import Filterpage from "../../components/Filterpage/Filterpage";
import BurgerMenü from "../../components/BurgerMenü/BurgerMenü";
import Logo from "../../components/Logo/Logo";
import Pokecard from "../../components/Pokecard/Pokecard";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Logo />
      <Pokecard />
    </>
  );
};

export default Home;
