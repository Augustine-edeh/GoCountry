// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link } from "react-router-dom";
// IMPORTING useContext HOOK
import { useContext, useState } from "react";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";
// IMPORTING THE CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";
// || IMPORTING THE THEMETOGGLER COMPONENT
import ThemeToggler from "./Components/ThemeToggler";
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

  return (
    <div className="App">
      <Link to="countries-search-app/">
        <Header />
      </Link>
      <ThemeToggler />
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
