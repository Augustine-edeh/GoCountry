import { Link } from "react-router-dom";
//  IMPORTING useContext HOOK
import { useContext } from "react";
// IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "../CountryInfoContext/CountryInfoContext";
import "./Country.css";
import Border from "./Border";

const Country = (props) => {
  const { countryInfo } = useContext(CountryInfoContext);

  const countryData = countryInfo[0];

  let currencyString;
  for (const property in countryData["currencies"]) {
    currencyString = `${property} (${countryData["currencies"][property].name}: ${countryData["currencies"][property].symbol})`;
  }

  // || COUNTRY LANGUAGE LOGIC
  let languages = [];
  for (const property in countryData["languages"]) {
    languages.push(countryData["languages"][property]);
  }
  languages = languages.join(", ");

  return (
    <div className="Country">
      <Link to="/countries-search-app" className="BackButton-container">
        <button className="Country-BackButton">
          <span>&larr;</span> <span>Back</span>
        </button>
      </Link>
      <section className="Country-Name_container">
        <h1 className="Country-Name slide-right">
          <span>{countryData.name.common.toUpperCase()}</span>
        </h1>
      </section>

      <section className="Country-Flex">
        <div className="flag-container">
          <img
            className="flag"
            src={`${countryData.flags.svg}`}
            alt={`Flag of ${countryData.name.common}`}
            title={`The flag of ${countryData.name.common}`}
            srcSet=""
          />
        </div>

        <div className="Country-Flex-Headline">
          <div className="Flex-Headline-key">
            <p className="flex-headline_items bold">Capital</p>
            <p className="flex-headline_items bold">Region</p>
            <p className="flex-headline_items bold">Sub region</p>
          </div>
          <div className="Flex-Headline-key">
            <p className="flex-headline_items bold">:</p>
            <p className="flex-headline_items bold">:</p>
            <p className="flex-headline_items bold">:</p>
          </div>

          <div className="Flex-Headline-value">
            <p className="flex-headline_items value">
              &nbsp;
              {countryData.capital}
            </p>
            <p className="flex-headline_items value">
              &nbsp;{countryData.region}
            </p>
            <p className="flex-headline_items value">
              &nbsp;{countryData.subregion}
            </p>
          </div>
        </div>
      </section>

      <section className="Country-Details">
        <p>
          Independence status:{" "}
          <span className="light-text">
            {countryData.independent
              ? "Sovereign state"
              : "Non-Sovereign state"}
          </span>
        </p>

        <p>
          Start Of Week:{" "}
          <span className="light-text">
            {countryData.startOfWeek.charAt(0).toUpperCase() +
              countryData.startOfWeek.slice(1)}
          </span>
        </p>
        <p>
          Demonym:{" "}
          <span className="light-text">{countryData.demonyms.eng.m}</span>
        </p>

        <p>
          Languages: <span className="light-text">{languages}</span>
        </p>
        <p>
          Currency: <span className="light-text">{currencyString}</span>
        </p>
        <p>
          Calling code:{" "}
          <span className="light-text">
            {`${countryData.idd.root}${countryData.idd.suffixes[0]}`}
          </span>
        </p>

        <p>
          Population:{" "}
          <span className="light-text">
            {new Intl.NumberFormat().format(countryData.population)}
          </span>
        </p>

        <p>
          Area:{" "}
          <span className="light-text">
            {new Intl.NumberFormat().format(countryData.area)}Km&#xb2;
          </span>
        </p>

        <p>
          Map:{" "}
          <span className="light-text">
            <a href={countryData.maps.googleMaps}>
              Map of {countryData.name.common}
            </a>
          </span>
        </p>
        <p>
          Borders:{" "}
          <span className="light-text">
            {"borders" in countryData ? (
              countryData.borders.map((borderingCountry) => (
                <Border key={Math.random()} border={borderingCountry} />
              ))
            ) : (
              <Border key={Math.random()} border="None" />
            )}
          </span>
        </p>
      </section>
    </div>
  );
};
export default Country;
