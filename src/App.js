// IMPORTING THE Routes & Route COMPONENTS
import { Routes, Route, Link } from "react-router-dom";
// IMPORTING useContext HOOK
import { useContext } from "react";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";
// IMPORTING THE CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";
import "./App.css";
import Title from "./Components/Title";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Country from "./Components/Country";
import Page404 from "./Components/Page404";
import SearchForm from "./Components/SearchForm";

function App() {
  const { countryInfo } = useContext(CountryInfoContext);

  return (
    <div className="App">
      <Link to="countries-search-app/">
        <Header />
      </Link>

      <main className="App-main">
        <Title />
        <CountryInfoProvider>
          <Routes>
            <Route path="countries-search-app/" element={<SearchForm />} />

            <Route
              path="countries-search-app/country"
              element={<Country nation={countryInfo} />}
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
