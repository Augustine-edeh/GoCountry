import "./HttpError.css";
import ReturnHomeButton from "./ReturnHomeButton";

const HttpError = ({ ErrorMessage }) => {
  return (
    <div className="HttpError">
      <br />
      <br />
      <h6>Ooops...</h6>
      <div className="ErrorSection">{ErrorMessage}</div>
      {/* <Link to="/GoCountry/"> */}
      <ReturnHomeButton buttonContent={"Try again"} />
      {/* </Link> */}
    </div>
  );
};

export default HttpError;
