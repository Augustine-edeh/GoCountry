// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link } from "react-router-dom";
// IMPORTING useContext HOOK
import { useContext, useState } from "react";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";
// IMPORTING THE CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";
// || IMPORTING THEME MODE ICONS
import MoonIcon from "./Images/moon-solid.svg";
import SunIcon from "./Images/sunIcon.png";
import Sun from "./Images/sun.png";

import "./App.css";
import Title from "./Components/Title";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Country from "./Components/Country";
import Page404 from "./Components/Page404";
import SearchForm from "./Components/SearchForm";
import HttpError from "./Components/HttpError";

function App() {
  const { countryInfo } = useContext(CountryInfoContext);
  let error_ = (
    <>
      <h3 className="ErrorMessageTitle">
        <span className="Destop-warning">&#9888;</span> Error
        <span className="Mobile-warning">&#9888;</span>
      </h3>
      <p className="ErrorFixSuggestion">
        We encountered an error. Please reurn to home page and try again.
      </p>
    </>
  );
  const [HttpErrorMessage, setHttpErrorMessage] = useState(
    error_
    // `Error fetching country Information`
  );
  const changeErrorMessageHandler = (err) => {
    setHttpErrorMessage(err);
  };

  // Change App theme
  const changeThemeHandler = () => {
    const ThemeIcon = document.querySelector(".Theme-Toggle");

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      ThemeIcon.src = Sun;
    } else {
      ThemeIcon.src = MoonIcon;
    }
  };

  return (
    <div className="App">
      <Link to="countries-search-app/">
        <Header />
      </Link>

      <div className="Theme-Toggle_container" onClick={changeThemeHandler}>
        <img src={MoonIcon} className="Theme-Toggle" alt="dark-mode" />
      </div>

      <main className="App-main">
        <Title />
        <CountryInfoProvider>
          <Routes>
            <Route
              path="countries-search-app/"
              element={
                <SearchForm changeErrorMessage={changeErrorMessageHandler} />
              }
            />

            <Route
              path="countries-search-app/country"
              element={<Country nation={countryInfo} />}
            />

            <Route
              path="/countries-search-app/error"
              element={<HttpError ErrorMessage={HttpErrorMessage} />}
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </CountryInfoProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
