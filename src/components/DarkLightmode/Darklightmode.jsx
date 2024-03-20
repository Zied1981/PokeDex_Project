import { useState } from "react";
import "./Darklightmode.css";
import dark_mode from "/src/assets/dark_mode.svg";
const DarkLightmode = ({ ...props }) => {
  const [switcher, setSwitcher] = useState(false);
  const darkLightSwitch = () => {
    setSwitcher((switcher) => !switcher);
    if (switcher === true) {
      document.documentElement.style.setProperty(
        "--colorgradient",
        "linear-gradient(to bottom left, #ffcb05, #ffe0c2)"
      );
      document.documentElement.style.setProperty("--bg", "#ccdadd");
    } else {
      document.documentElement.style.setProperty(
        "--colorgradient",
        "linear-gradient(to bottom left, #011325, #BADAF9)"
      );
      document.documentElement.style.setProperty("--bg", "#000000");
    }
  };
  return <img {...props} onClick={darkLightSwitch} src={dark_mode} alt="" />;
};

export default DarkLightmode;
