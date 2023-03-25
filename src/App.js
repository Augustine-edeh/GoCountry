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
    console.log(countryData);
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
