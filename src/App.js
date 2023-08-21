// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link, Navigate } from "react-router-dom";
// IMPORTING useContext HOOK
import { useContext, useState } from "react";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";
// IMPORTING THE CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";
// || IMPORTING THE THEMETOGGLER COMPONENT
import ThemeToggler from "./Components/UI/ThemeToggler";
import "./App.css";
import Title from "./Components/UI/Title";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Country from "./Components/UI/Country";
import Page404 from "./Components/UI/Page404";
import Home from "./Components/UI/Home";
import HttpError from "./Components/UI/HttpError";

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
  const [HttpErrorMessage, setHttpErrorMessage] = useState(error_);
  const changeErrorMessageHandler = (err) => {
    setHttpErrorMessage(err);
  };

  return (
    <div className="App">
      <Link to="GoCountry/">
        <Header />
      </Link>
      <ThemeToggler />
      <main className="App-main">
        <Title />
        <CountryInfoProvider>
          <Routes>
            <Route
              path="GoCountry/"
              element={<Home changeErrorMessage={changeErrorMessageHandler} />}
            />
            <Route
              path="countries-search-app"
              element={
                // <SearchForm changeErrorMessage={changeErrorMessageHandler} />
                <Navigate to="/GoCountry" />
              }
            />

            <Route
              path="GoCountry/country"
              element={<Country nation={countryInfo} />}
            />

            <Route
              path="/GoCountry/error"
              element={<HttpError ErrorMessage={HttpErrorMessage} />}
            />

            <Route path="*" element={<Page404 />} />

            {/* <Route path="/" element={<Home />} /> */}
            {/* The next line is very important for the Navigate component to work */}
            {/* <Route path="/error-page" element={<ErrorPage />} /> */}
          </Routes>
        </CountryInfoProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
