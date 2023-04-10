// Importing the Routes & Route Components
import { Routes, Route, Router } from "react-router-dom";
// Importing useContext hook
import { useContext } from "react";
//  Importing the CountryInfo context
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import SearchForm from "./Components/SearchForm";
import Footer from "./Components/Footer";
import Country from "./Components/Country";

// Importing the CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";

function App() {
  // const [errStatus, setErrStatus] = useState(false);
  // const [countryInfo, setCountryInfo] = useState([
  //   { name: "Nigeria" },
  //   { status: "Status; All good!" },
  // ]);

  const { countryInfo } = useContext(CountryInfoContext);
  // console.log(countryInfo);

  const [Data, setData] = useState();
  // const emptyInputHandler = (status) => {
  //   setErrStatus((previous) => status);
  // };

  const receiveCountryDataHandler = (countryData) => {
    setData(countryData);
    // setCountryInfo((previous) => {
    //   return { ...previous, countryData };
    // });
    // console.log(countryData);
    // console.log(countryInfo);
    // return countryInfo;
  };
  // useEffect(() => {
  //   console.log("Inside Use Effect!");
  //   setCountryInfo(Data);
  //   console.log(countryInfo);
  // }, [Data]);

  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <Title />
        <CountryInfoProvider>
          {/* <SearchForm
            // onEmptyInput={emptyInputHandler}
            onReceiveCountryData={receiveCountryDataHandler}
          /> */}

          {/* {errStatus ? (
            <p className="App-empty-search_Error">
              Please enter a country name
            </p>
          ) : (
            ""
          )} */}

          {/* {countryInfo && <Country countryInfo={countryInfo} />} */}

          <Routes>
            <Route path="countries-search-app/" element={<SearchForm />} />

            <Route
              path="countries-search-app/country"
              element={<Country nation={countryInfo} />}
            />
          </Routes>

          {/* <Country /> */}
        </CountryInfoProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
