//  IMPORTING useContext HOOK
import CountryNames from "../../CountriesCommonNameList/countryNames.json";
import "./Country.css";
import Border from "./Border";
import BackButton from "./BackButton";

const Country = (props) => {
  const countryData1 = JSON.parse(sessionStorage.getItem("Country-Info"))[0];

  let currencyString;
  for (const property in countryData1["currencies"]) {
    currencyString = `${property} (${countryData1["currencies"][property].name}: ${countryData1["currencies"][property].symbol})`;
  }

  // || COUNTRY LANGUAGE LOGIC
  let languages = [];
  for (const property in countryData1["languages"]) {
    languages.push(countryData1["languages"][property]);
  }
  languages = languages.join(", ");

  return (
    <div className="Country">
      <BackButton />
      <section className="Country-Name_container">
        <h1 className="Country-Name slide-right">
          <span>{countryData1.name.common.toUpperCase()}</span>
        </h1>
      </section>

      <section className="Country-Flex">
        <div className="flag-container">
          <img
            className="flag"
            src={`${countryData1.flags.svg}`}
            alt={`Flag of ${countryData1.name.common}`}
            title={`The flag of ${countryData1.name.common}`}
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
              {countryData1.capital.join(", ")}
            </p>
            <p className="flex-headline_items value">
              &nbsp;{countryData1.region}
            </p>
            <p className="flex-headline_items value">
              &nbsp;{countryData1.subregion}
            </p>
          </div>
        </div>
      </section>

      <section className="Country-Details">
        <p>
          Independence status:{" "}
          <span className="light-text">
            {countryData1.independent
              ? "Sovereign state"
              : "Non-Sovereign state"}
          </span>
        </p>

        <p>
          Start Of Week:{" "}
          <span className="light-text">
            {countryData1.startOfWeek.charAt(0).toUpperCase() +
              countryData1.startOfWeek.slice(1)}
          </span>
        </p>
        <p
          title={`Date/Time at ${
            CountryNames[0].data[countryData1.cca3].country
          }'s capital, ${countryData1.capital}`}
        >
          Time-Date:
          <span className="light-text">
            {countryData1.date}
            {", "}
            {countryData1.time}
          </span>
        </p>
        <p>
          Demonym:{" "}
          <span className="light-text">{countryData1.demonyms.eng.m}</span>
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
            {countryData1.idd.suffixes.length > 1
              ? `${countryData1.idd.root}`
              : `${countryData1.idd.root}${countryData1.idd.suffixes}`}
          </span>
        </p>

        <p>
          Population:{" "}
          <span className="light-text">
            {new Intl.NumberFormat().format(countryData1.population)}
          </span>
        </p>

        <p>
          Area:{" "}
          <span className="light-text">
            {new Intl.NumberFormat().format(countryData1.area)}Km&#xb2;
          </span>
        </p>

        <p>
          Map:{" "}
          <span className="light-text">
            <a
              className="mapLink"
              href={countryData1.maps.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              Map of {countryData1.name.common}
            </a>
          </span>
        </p>
        <p>
          Borders:{" "}
          <span className="light-text">
            {"borders" in countryData1 ? (
              countryData1.borders.map((borderingCountry) => (
                <Border
                  key={Math.random()}
                  border={borderingCountry}
                  updateIsLoading={props.updateIsLoading}
                />
              ))
            ) : (
              <Border
                key={Math.random()}
                border="None"
                country={countryData1.name.common}
              />
            )}
          </span>
        </p>
      </section>
    </div>
  );
};
export default Country;
