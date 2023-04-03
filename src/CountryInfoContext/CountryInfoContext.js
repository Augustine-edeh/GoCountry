import { createContext, useState } from "react";

const CountryInfoContext = createContext();

export function CountryInfoProvider({ children }) {
  return (
    <CountryInfoContext.Provider value={{ country: "Nigeia" }}>
      {children}
    </CountryInfoContext.Provider>
  );
}

export default CountryInfoContext;
