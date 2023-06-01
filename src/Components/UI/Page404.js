import ReturnHomeButton from "./ReturnHomeButton";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="Page404">
      <img src="#" alt="404_Image" />
      <h3>Ooops...</h3>
      <h1>You've gone off the map</h1>
      <ReturnHomeButton buttonContent={"Take me home"} />
    </div>
  );
};

export default Page404;
