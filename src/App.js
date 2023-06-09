// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link } from "react-router-dom";
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
import SearchForm from "./Components/UI/SearchForm";
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
              element={
                <SearchForm changeErrorMessage={changeErrorMessageHandler} />
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
          </Routes>
        </CountryInfoProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
