// Importing the Routes & Route Components
import { Routes, Route, Link } from "react-router-dom";
// Importing useContext hook
import { useContext } from "react";
//  Importing the CountryInfo context
import CountryInfoContext from "./CountryInfoContext/CountryInfoContext";

import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import SearchForm from "./Components/SearchForm";
import Footer from "./Components/Footer";
import Country from "./Components/Country";
import Page404 from "./Components/Page404";

// Importing the CountryInfo-Context-Provider
import { CountryInfoProvider } from "./CountryInfoContext/CountryInfoContext";

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
