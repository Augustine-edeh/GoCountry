// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
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

import LoadingSpinner from "./Components/Portal/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function updateIsLoadingHandler(load) {
    setIsLoading(load);
  }

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
      {isLoading && <LoadingSpinner />}

      <Link to="GoCountry/">
        <Header />
      </Link>
      <ThemeToggler />
      <main className="App-main">
        <Title>Country-search-App</Title>
        <Routes>
          <Route
            index
            path="GoCountry/"
            element={
              <Home
                updateIsLoading={updateIsLoadingHandler}
                changeErrorMessage={changeErrorMessageHandler}
              />
            }
          />
          {/* <Route
            path="countries-search-app"
            element={<Navigate to="/GoCountry" />}
          /> */}
          {console.log("Hey")}

          <Route
            path="GoCountry/country"
            element={<Country updateIsLoading={updateIsLoadingHandler} />}
          />

          <Route
            path="/GoCountry/error"
            element={<HttpError ErrorMessage={HttpErrorMessage} />}
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
