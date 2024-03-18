import "./Home.css";
import BurgerMenü from './../../components/BurgerMenü/BurgerMenü';
import Filterpage from "../../components/Filterpage/Filterpage";
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
