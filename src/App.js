import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import SearchForm from "./Components/SearchForm";
import Footer from "./Components/Footer";

function App() {
  const [errStatus, setErrStatus] = useState(false);

  const emptyInputHandler = (status) => {
    setErrStatus((previous) => status);
  };

  const receiveCountryDataHandler = (countryData) => {
    const countryInfo = {
      name: countryData[0].name.common,
      flag: countryData[0].flags.flag,
      map: countryData[0].maps.googleMaps,
      // laguage: countryData[0].laguages[eng],
      currency: countryData[0].currencies,
      continent: countryData[0].continents,
      subregion: countryData[0].subregion,
      capital: countryData[0].capital,
      borders: countryData[0].borders,
      population: countryData[0].population,
      startOfWeek: countryData[0].startOfWeek,
    };
    // console.log(countryData);
    console.log(countryInfo);
  };

  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <Title />
        <SearchForm
          onEmptyInput={emptyInputHandler}
          onReceiveCountryData={receiveCountryDataHandler}
        />
        {errStatus ? (
          <p className="App-empty-search_Error">Please enter a country name</p>
        ) : (
          ""
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
