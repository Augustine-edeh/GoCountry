import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="Page404">
      <img src="#" alt="404_Image" />
      <h3>Ooops...</h3>
      <h1>You've gone off the map</h1>
      <Link to="/countries-search-app/">
        <button>Take me home</button>
      </Link>
    </div>
  );
};

export default Page404;
