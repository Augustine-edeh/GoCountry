import "./Border.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CountryNames from "../../CountriesCommonNameList/countryNames.json";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "../../CountryInfoContext/CountryInfoContext";

const Border = (props) => {
  // IMPORTING THE updateCountryInfo UPDATER FUNCTION
  const { updateCountryInfo } = useContext(CountryInfoContext);

  // ASSIGNING THE useNavugate HOOK
  const navigate = useNavigate();

  const clickHandler = () => {
    const borderURL = `https://restcountries.com/v3.1/alpha/${props.border}`;
    fetch(borderURL)
      .then((response) => {
        // Checking if response status is successful
        if (!response.ok) {
          // Throwing error if response status is not successful
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((countryData) => {
        // UPDATING THE countryInfo CONTEXT
        updateCountryInfo(countryData);
        document.querySelector(".Country-Name").classList.remove("slide-right");
        setTimeout(
          () =>
            document
              .querySelector(".Country-Name")
              .classList.add("slide-right"),
          1
        );
      });
  };

  return props.border !== "None" ? (
    <button
      type="button"
      className="Border"
      onClick={clickHandler}
      title={CountryNames[0].data[props.border].country}
    >
      {props.border}
    </button>
  ) : (
    <button
      type="button"
      className="noBorder"
      title={`${props.country} has no borders`}
    >
      {props.border}
    </button>
  );
};
export default Border;
