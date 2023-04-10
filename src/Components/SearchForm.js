import { useState, useEffect } from "react";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

// Importing use-Context hook
import { useContext } from "react";
//  Importing the CountryInfo context
import CountryInfoContext from "../CountryInfoContext/CountryInfoContext";

const SearchForm = (props) => {
  const [countryValue, setcountryValue] = useState("");
  // let data;

  // Importing the updateCountryInfo function
  const { updateCountryInfo } = useContext(CountryInfoContext);

  const [errorStatus, setErrorStatus] = useState();

  const changeHandler = (event) => {
    setcountryValue(event.target.value);
  };
  // Assigning the useNavugate hook
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    // checking if countryValue is not empty
    if (!!countryValue) {
      // Trying to set an error status and sending (lifting the errorStatus state to the App component) same error status to the App component
      setErrorStatus((previous) => false);
      // props.onEmptyInput(errorStatus);

      console.log("Fetching country Data...");

      const countryURL = `https://restcountries.com/v3.1/name/${countryValue.trim()}`;
      fetch(countryURL)
        .then((response) => response.json())
        .then((countryData) => {
          // console.log(countryData);
          // props.onReceiveCountryData(countryData);
          console.log(countryData);
          console.log(countryValue);
          console.log(
            // Filtering the results array to match exact country  by country name searched
            countryData.filter(
              (country) =>
                country.name.common.toLocaleLowerCase() ===
                countryValue.toLocaleLowerCase()
            )
          );
          // Updating the country Information
          updateCountryInfo(countryData);
          // Programmatically navigating to a result page (URL)
          navigate("/countries-search-app/country");
          // data = countryData;
        })
        .catch((err) => console.log(err));
    } else {
      setErrorStatus(true);
      // props.onEmptyInput(() => {
      // setErrorStatus(true);
      // return true;
      // });

      console.log("Oooops... Input can not be empty!!!");
    }

    // Adding 2-way binding for countryValue
    setcountryValue("");
  };

  // useEffect(() => {
  //   updateCountryInfo(data);
  // }, [countryInfo]);
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
      {errorStatus ? (
        <p className="App-empty-search_Error">Please enter a country name</p>
      ) : (
        ""
      )}
    </>
  );
};
export default SearchForm;
