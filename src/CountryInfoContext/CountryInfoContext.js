import { createContext, useState } from "react";

const CountryInfoContext = createContext();

export function CountryInfoProvider({ children }) {
  const [countryInfo, setCountryInfo] = useState([
    {
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
      borders: ["BEN", "CMR", "TCD", "NER", "aUGUSTINE"],
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
    },
  ]);

  const updateCountryInfo = (newData) => {
    setCountryInfo(newData);
  };

  return (
    <CountryInfoContext.Provider value={{ countryInfo, updateCountryInfo }}>
      {children}
    </CountryInfoContext.Provider>
  );
}

export default CountryInfoContext;
