import { Link } from "react-router-dom";
import "./HttpError.css";

const HttpError = ({ ErrorMessage }) => {
  return (
    <div className="HttpError">
      <br />
      <br />
      <h6>Ooops...</h6>
      <div className="ErrorSection">{ErrorMessage}</div>
      <Link to="/countries-search-app/">
        <button>Try again</button>
      </Link>
    </div>
  );
};

export default HttpError;
