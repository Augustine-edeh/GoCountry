import { Link } from "react-router-dom";
import "./ReturnHomeButton.css";

const ReturnHomeButton = ({ buttonContent }) => {
  return (
    <Link to="/GoCountry/" className="ReturnHomeButton">
      <button>{buttonContent}</button>
    </Link>
  );
};

export default ReturnHomeButton;
