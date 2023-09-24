import { useNavigate } from "react-router-dom";
import "./ReturnHomeButton.css";

const ReturnHomeButton = ({ buttonContent }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/GoCountry/");
  };

  return (
    <button className="ReturnHomeButton" onClick={clickHandler}>
      {buttonContent}
    </button>
  );
};

export default ReturnHomeButton;
