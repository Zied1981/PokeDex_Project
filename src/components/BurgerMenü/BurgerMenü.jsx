import "./BurgerMenü.css";
import BurgerImg from "/src/assets/menu.png";
const BurgerMenü = ({ onClick }) => {
  return (
    <div className="burger-menu" onClick={onClick}>
      <img src={BurgerImg} alt="burger menu" />
    </div>
  );
};

export default BurgerMenü;
