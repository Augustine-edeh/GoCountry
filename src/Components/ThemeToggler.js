import "./ThemeToggler.css";
// || IMPORTING THEME MODE ICONS
import MoonIcon from "../Images/moon-solid.svg";
import SunIcon from "../Images/sunIcon.png";
import Sun from "../Images/sun.png";

const ThemeToggler = () => {
  // Change App theme
  const changeThemeHandler = () => {
    const ThemeIcon = document.querySelector(".Theme-Toggle");

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      ThemeIcon.src = Sun;
    } else {
      ThemeIcon.src = MoonIcon;
    }
  };

  return (
    <div className="Theme-Toggle_container" onClick={changeThemeHandler}>
      <img src={MoonIcon} className="Theme-Toggle" alt="dark-mode" />
    </div>
  );
};
export default ThemeToggler;
