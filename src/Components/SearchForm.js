import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "../CountryInfoContext/CountryInfoContext";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [countryValue, setcountryValue] = useState("");

  // IMPORTING THE updateCountryInfo UPDATER FUNCTION
  const { updateCountryInfo } = useContext(CountryInfoContext);

  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState();

  const changeHandler = (event) => {
    setcountryValue(event.target.value);
  };
  // ASSIGNING THE useNavugate HOOK
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    // CHEECKING IF countryValue IS NOT EMPTY
    if (!!countryValue) {
      // SETTING isSearchInputEmpty TO FALSE
      setIsSearchInputEmpty((previous) => false);

      // || FILTERING THE COUNTRY NAME ENTERED (TRIM AND REMOVE EVERY NON-ALPHABETIC CHARACTER EXCEPT WHITESPACES IN-BETWEEN WORDS)
      const filteredCountryValue = countryValue
        .trim()
        .replaceAll(/[^a-zA-Z\s]/gi, "");

      // || CUSTOM ERROR-MESSAGE FUNCTION
      function customErrorMessage(message = "") {
        this.message = message;
      }
      customErrorMessage.prototype = new Error();

      // || COUNTRY HTTP REQUEST CALL
      const countryURL = `https://restcountries.com/v3.1/name/${filteredCountryValue}`;
      fetch(countryURL)
        .then((response) => {
          // Checking if response status is successful
          if (!response.ok) {
            // Throwing error if response status is not successful
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((countryData) => {
          // IF HTTP REQUEST RETURNS MORE THAN ONE DATA ARRAY
          if (countryData.length > 1) {
            countryData = countryData.filter(
              (country) =>
                country.name.common.toLocaleLowerCase() ===
                filteredCountryValue.toLocaleLowerCase()
            );

            // IF HTTP REQUEST RETURNS MORE THAN ONE DATA ARRAY AND NONE MATCHES A COMMON NAME AS THE COUNTRY NAME ENTERED BY THE USER
            if (!countryData.length) {
              throw new customErrorMessage({
                message: "Country Name not specific",
              });
            }
          }
          // UPDATING THE countryInfo CONTEXT
          updateCountryInfo(countryData);
          // PROGRAMMATICALLY NAVIGATING TO THE RESULT PAGE
          navigate("/countries-search-app/country");
        })
        .catch((error) => {
          let ErrorMessage;
          // console.log(error.message);
          if (error.message === "Not Found") {
            // If the country searched for is not correct/Not Found
            ErrorMessage = (
              <>
                <h3 className="ErrorMessageTitle">
                  <span className="Destop-warning">&#9888;</span> Country not
                  found <span className="Mobile-warning">&#9888;</span>
                </h3>
                <p className="ErrorFixSuggestion">
                  Please check country name entered and try again.
                </p>
              </>
            );
            props.changeErrorMessage(ErrorMessage);
            navigate(`/countries-search-app/error`);
          } else if (error.message === "Failed to fetch") {
            // If user searches country without internet connectivity
            ErrorMessage = (
              <>
                <h3 className="ErrorMessageTitle">
                  <span className="Destop-warning">&#9888;</span> Connectivity
                  Error <span className="Mobile-warning">&#9888;</span>
                </h3>
                <p className="ErrorFixSuggestion">
                  Please check your internet connection and try again.
                </p>
              </>
            );
            props.changeErrorMessage(ErrorMessage);
            navigate(`/countries-search-app/error`);
            // Displaying an error message to console
            console.error(
              `Please check your internet connection and try again`
            );
          } else if (error instanceof customErrorMessage) {
            ErrorMessage = (
              <>
                <h3 className="ErrorMessageTitle">
                  <span className="Destop-warning">&#9888;</span> Unspecific
                  Country Name <span className="Mobile-warning">&#9888;</span>
                </h3>
                <p className="ErrorFixSuggestion">
                  Please try again with a more specific country name.
                </p>
              </>
            );
            props.changeErrorMessage(ErrorMessage);
            navigate(`/countries-search-app/error`);
          } else {
            // Handle all other error cases
            ErrorMessage = (
              <>
                <h3 className="ErrorMessageTitle">
                  <span className="Destop-warning">&#9888;</span> Internal
                  server Error <span className="Mobile-warning">&#9888;</span>
                </h3>
                <p className="ErrorFixSuggestion">
                  Not to worry, the error was from us. Please try again.
                </p>
              </>
            );
            props.changeErrorMessage(ErrorMessage);
            navigate(`/countries-search-app/error`);
          }
        });
    } else {
      setIsSearchInputEmpty(true);
    }

    // Adding 2-way binding for countryValue
    setcountryValue("");
  };

  return (
    <>
      <form className="Form" onSubmit={submitHandler}>
        <input
          type="text"
          className="Form-input"
          placeholder="Enter country name"
          value={countryValue}
          onChange={changeHandler}
        />
        <button className="Form-button" type="submit">
          Search
        </button>
      </form>
      {isSearchInputEmpty ? (
        <p className="App-empty-search_Error">Please enter a country name</p>
      ) : (
        ""
      )}
    </>
  );
};
export default SearchForm;
