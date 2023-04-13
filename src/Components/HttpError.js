import { Link } from "react-router-dom";
import "./HttpError.css";

const HttpError = ({ ErrorMessage }) => {
  return (
    <div className="HttpError">
      <br />
      <br />
      <h6>Ooops...</h6>
      <>{ErrorMessage}</>
      <Link to="/countries-search-app/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default HttpError;
