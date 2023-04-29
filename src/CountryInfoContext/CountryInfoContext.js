import { createContext, useState } from "react";

const CountryInfoContext = createContext();

export function CountryInfoProvider({ children }) {
  const [countryInfo, setCountryInfo] = useState([
    {
      name: {
        common: "Nigeria",
      },
      independent: true,
      currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
      idd: { root: "+2", suffixes: ["34"] },
      capital: ["Abuja"],
      region: "Africa",
      subregion: "Western Africa",
      languages: { eng: "English" },
      borders: ["BEN", "CMR", "TCD", "NER"],
      area: 923768.0,
      demonyms: {
        eng: { m: "Nigerian" },
      },
      maps: {
        googleMaps: "https://goo.gl/maps/LTn417qWwBPFszuV9",
        openStreetMaps: "https://www.openstreetmap.org/relation/192787",
      },
      population: 206139587,
      continents: ["Africa"],
      flags: {
        png: "https://flagcdn.com/w320/ng.png",
        svg: "https://flagcdn.com/ng.svg",
        alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green.",
      },
      startOfWeek: "monday",
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
