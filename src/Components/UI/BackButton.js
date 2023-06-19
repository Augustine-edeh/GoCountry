import { Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  return (
    <Link to="/GoCountry" className="BackButton-container">
      <button className="BackButton">
        <span>&larr;</span> <span>Back</span>
      </button>
    </Link>
  );
};
export default BackButton;
