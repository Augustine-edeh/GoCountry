import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import SearchForm from "./Components/SearchForm";
import Footer from "./Components/Footer";
import Country from "./Components/Country";

function App() {
  const [errStatus, setErrStatus] = useState(false);
  const [countryInfo, setCountryInfo] = useState([
    { name: "Nigeria" },
    { status: "Status; All good!" },
  ]);
  const [Data, setData] = useState();
  const emptyInputHandler = (status) => {
    setErrStatus((previous) => status);
  };

  const receiveCountryDataHandler = (countryData) => {
    setData(countryData);
    // setCountryInfo((previous) => {
    //   return { ...previous, countryData };
    // });
    // console.log(countryData);
    // console.log(countryInfo);
    // return countryInfo;
  };
  useEffect(() => {
    console.log("Inside Use Effect!");
    setCountryInfo(Data);
    console.log(countryInfo);
  }, [Data]);

  return (
    <div className="App">
      <Header />

      <main className="App-main">
        {/* <Title />
        <SearchForm
          onEmptyInput={emptyInputHandler}
          onReceiveCountryData={receiveCountryDataHandler}
        />
        {errStatus ? (
          <p className="App-empty-search_Error">Please enter a country name</p>
        ) : (
          ""
        )} */}

        {/* {countryInfo && <Country countryInfo={countryInfo} />} */}

        <Country />
      </main>

      <Footer />
    </div>
  );
}

export default App;
