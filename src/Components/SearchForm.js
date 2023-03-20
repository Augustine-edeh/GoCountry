import { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [countryValue, setcountryValue] = useState("");
  const changeHandler = (event) => {
    setcountryValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const countryURL = `https://restcountries.com/v3.1/name/${countryValue}`;
    fetch(countryURL)
      .then((response) => response.json())
      .then((data) => {
        console.log("@@@@" + data);
        throw new Error();
      })
      .catch((err) => console.log("###" + err));

    // Adding 2-way binding for countryValue
    setcountryValue("");
  };
  return (
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
  );
};
export default SearchForm;
