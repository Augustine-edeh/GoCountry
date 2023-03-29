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

  return (
    <div className="Country">
      {/* {false ? <p>Hey there!</p> : "Error"} */}
      <button>&larr;B back</button>

      <div className="Country-flex">
        <img
          src="https://flagcdn.com/ng.svg"
          alt={`Flag of ${countryData.name.common}`}
          title={`The flag of ${countryData.name.common}`}
          srcSet=""
          // sizes="100px"
          sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          width={600}
          // height={200}
        />
      </div>
      {countryData && <p>Hello</p>}
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
