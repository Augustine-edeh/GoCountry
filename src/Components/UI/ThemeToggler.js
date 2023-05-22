import "./ThemeToggler.css";
// || IMPORTING THEME MODE ICONS
import MoonIcon from "../Images/moon-solid.svg";
import Sun from "../Images/sun.png";

const ThemeToggler = () => {
  // Change App theme
  const changeThemeHandler = () => {
    const ThemeIcon = document.querySelector(".Theme-Toggle_Icon");

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      ThemeIcon.src = Sun;
    } else {
      ThemeIcon.src = MoonIcon;
    }
  };

  return (
    <button
      type="button"
      className="Theme-Toggle_Button"
      onClick={changeThemeHandler}
    >
      <img src={MoonIcon} className="Theme-Toggle_Icon" alt="dark-mode" />
    </button>
  );
};
export default ThemeToggler;
