import "./Country.css";

const Country = (props) => {
  // const countryInformationsReceived = props;
  // console.log(countryInformationsReceived);

  const countryData = {
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
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
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
  };

  // const obj = countryData.currencies;
  // var result = Object.keys(obj).map((key) => [key, Object.keys(obj[key])]);
  // console.log(result[0][0]);
  // console.log(result[0][1]);

  return (
    <div className="Country">
      {/* {false ? <p>Hey there!</p> : "Error"} */}
      <button className="Country-BackButton">&larr; Back</button>
      <section className="Country-Name_container">
        <h1 className="Country-Name slide-right">
          {countryData.name.common.toUpperCase()}
        </h1>
      </section>

      <section className="Country-Flex">
        <img
          src="https://flagcdn.com/ng.svg"
          alt={`Flag of ${countryData.name.common}`}
          title={`The flag of ${countryData.name.common}`}
          srcSet=""
          // sizes="100px"
          // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          width={600}
          // height={300}
        />

        <div className="Country-Flex-Headline">
          <div className="Flex-Headline-key">
            <p className="flex-headline_items">CAPITAL</p>
            <p className="flex-headline_items">Continent</p>
            <p className="flex-headline_items">Sub region</p>
          </div>
          <div className="Flex-Headline-key">
            <p className="flex-headline_items">:</p>
            <p className="flex-headline_items">:</p>
            <p className="flex-headline_items">:</p>
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
        {/* <p>CAPITAL: {countryData.capital}</p>
        <p>Continent: {countryData.region}</p>
        <p>Sub region: {countryData.subregion}</p> */}
        <p>
          Independence status:{" "}
          {countryData.independent ? "Sovereign state" : "Non-Sovereign state"}
        </p>
        {/* <p>Currency: {countryData.currencies}</p> */}
        <p>
          Currency:{" "}
          {String(
            Object.entries(countryData.currencies)[0],
            Object.entries(countryData.currencies)
          )}
        </p>
        <p>
          Calling code: {`${countryData.idd.root}${countryData.idd.suffixes}`}
        </p>
        <p>Languages: {countryData.languages.eng}</p>

        <p>Capital: {countryData.capital}</p>
        <p>Area: {countryData.area} Km&#xb2;</p>
        <p>Demonym: {countryData.demonyms.eng.m}</p>
        <p>
          Map:{" "}
          <a href={countryData.maps.googleMaps}>
            Map of {countryData.name.common}
          </a>
        </p>
        <p>
          Population: {new Intl.NumberFormat().format(countryData.population)}
        </p>

        <p>
          Start Of Week:{" "}
          {countryData.startOfWeek.charAt(0).toUpperCase() +
            countryData.startOfWeek.slice(1)}
        </p>
        <p>
          Borders:{" "}
          {countryData.borders.map((borderingCountry) => (
            <button key={Math.random()}>{borderingCountry}</button>
          ))}
        </p>
      </section>
      {/* {countryData && <p>Hello</p>} */}
      {/* Continent: {JSON.stringify(props.countryInfo)} */}
      {/* Country Name: {JSON.stringify(props.countryInfo)}
      <br />
      Country Name: {JSON.stringify(props.countryInfo)}
      <br />
      Country Name: {JSON.stringify(props.countryInfo)}
      <br />
      Country Name: {JSON.stringify(props.countryInfo)}
      <br />
      Country Name: {JSON.stringify(props.countryInfo)}
      <br />
      Country Name: {JSON.stringify(props.countryInfo)} */}
    </div>
  );
  //   <p>This is the country Component</p>;
};
export default Country;
