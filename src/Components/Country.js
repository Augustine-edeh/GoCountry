import "./Country.css";
import Border from "./Border";

// Importing the CountryInfo- context
import CountryInfoContext from "../CountryInfoContext/CountryInfoContext";
//  Importing useContext hook
import { useContext } from "react";

const Country = (props) => {
  // const countryInformationsReceived = props;
  // console.log(countryInformationsReceived);

  const { countryInfo } = useContext(CountryInfoContext);
  console.log(countryInfo);

  // const countryData = countryInfo;
  const countryData = countryInfo[0];
  const currency = `${countryData["currencies"]}`;
  console.log(currency);

  // for (const property in currency) {
  //   console.log(`${property}`);
  // }
  let currencyString;
  for (const property in countryData["currencies"]) {
    console.log(countryData["currencies"][property]);
    currencyString = `${property} (${countryData["currencies"][property].name}: ${countryData["currencies"][property].symbol})`;
  }

  const countryData_1 = {
    name: {
      common: "Nigeria",
      official: "Federal Republic of Nigeria",
      nativeName: {
        eng: {
          official: "Federal Republic of Nigeria",
          common: "Nigeria",
        },
      },
    },
    tld: [".ng"],
    cca2: "NG",
    ccn3: "566",
    cca3: "NGA",
    cioc: "NGR",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    idd: { root: "+2", suffixes: ["34"] },
    capital: ["Abuja"],
    region: "Africa",
    subregion: "Western Africa",
    languages: { eng: "English" },
    latlng: [10.0, 8.0],
    landlocked: false,
    borders: ["BEN", "CMR", "TCD", "NER"],
    area: 923768.0,
    demonyms: {
      eng: { f: "Nigerian", m: "Nigerian" },
    },
    flag: "\uD83C\uDDF3\uD83C\uDDEC",
    maps: {
      googleMaps: "https://goo.gl/maps/LTn417qWwBPFszuV9",
      openStreetMaps: "https://www.openstreetmap.org/relation/192787",
    },
    population: 206139587,
    gini: { 2018: 35.1 },
    fifa: "NGA",
    car: { signs: ["WAN"], side: "right" },
    timezones: ["UTC+01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/ng.png",
      svg: "https://flagcdn.com/ng.svg",
      alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ng.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ng.svg",
    },
    startOfWeek: "monday",
    capitalInfo: { latlng: [9.08, 7.53] },
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
  };

  // for (const property in countryData_1["currencies"]) {
  //   console.log(countryData_1["currencies"][property]);
  //   console.log(
  //     `${property} (${countryData_1["currencies"][property].name}: ${countryData_1["currencies"][property].symbol})`
  //   );
  // }

  // const obj = countryData.currencies;
  // var result = Object.keys(obj).map((key) => [key, Object.keys(obj[key])]);
  // console.log(result[0][0]);
  // console.log(result[0][1]);

  return (
    <div className="Country">
      <button className="Country-BackButton">&larr; Back</button>
      <section className="Country-Name_container">
        <h1 className="Country-Name slide-right">
          {countryData.name.common.toUpperCase()}
        </h1>
      </section>

      <section className="Country-Flex">
        <img
          src={`${countryData.flags.svg}`}
          alt={`Flag of ${countryData.name.common}`}
          title={`The flag of ${countryData.name.common}`}
          srcSet=""
          width={600}
        />

        <div className="Country-Flex-Headline">
          <div className="Flex-Headline-key">
            <p className="flex-headline_items bold">Capital</p>
            <p className="flex-headline_items bold">Continent</p>
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
          Languages:{" "}
          <span className="light-text">{countryData.languages.eng}</span>
        </p>
        <p>
          Currency: <span className="light-text">{currencyString}</span>
        </p>
        <p>
          Calling code:{" "}
          <span className="light-text">
            {`${countryData.idd.root}${countryData.idd.suffixes}`}
          </span>
        </p>

        <p>
          Population:{" "}
          <span className="light-text">
            {new Intl.NumberFormat().format(countryData.population)}
          </span>
        </p>

        <p>
          Area: <span className="light-text">{countryData.area} Km&#xb2;</span>
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
            {countryData.borders.map((borderingCountry) => (
              <Border key={Math.random()} border={borderingCountry} />
            ))}
          </span>
        </p>
      </section>
    </div>
  );
};
export default Country;
