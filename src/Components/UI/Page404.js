import ReturnHomeButton from "./ReturnHomeButton";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="Page404">
      {/* <img src="#" alt="404_Image" /> */}
      <p className="Page404-Header">404</p>
      <p className="Page404-text">Ooops...</p>
      <p className="Page404-description">You've gone off the map.</p>
      <button className="Page404_button">Take me home</button>
      {/* <ReturnHomeButton buttonContent={"Take me home"} /> */}
    </div>
  );
};

export default Page404;
