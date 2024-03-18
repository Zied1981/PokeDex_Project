import "./BurgerMenü.css";
const BurgerMenü = ({ onClick }) => {

  return (
    <div className="burger-menu" onClick={onClick}>
      <img src="./src/assets/menu.png" alt="burger menu" />
    </div>
  );
}
 
export default BurgerMenü;
