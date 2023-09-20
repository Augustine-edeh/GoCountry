import "./Border.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CountryNames from "../../CountriesCommonNameList/countryNames.json";
//  IMPORTING THE CountryInfo CONTEXT
import CountryInfoContext from "../../CountryInfoContext/CountryInfoContext";

const Border = (props) => {
  // console.log(props.loadState);
  // IMPORTING THE updateCountryInfo UPDATER FUNCTION
  const { updateCountryInfo } = useContext(CountryInfoContext);

  // ASSIGNING THE useNavugate HOOK
  const navigate = useNavigate();

  const clickHandler = () => {
    // const borderURL = `https://restcountries.com/v3.1/alpha/${props.border}`;
    // fetch(borderURL)
    //   .then((response) => {
    //     // props.loadState(true);
    //     // Checking if response status is successful
    //     if (!response.ok) {
    //       // Throwing error if response status is not successful
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then((countryData) => {
    //     // UPDATING THE countryInfo CONTEXT
    //     updateCountryInfo(countryData);
    //     // TRIGER country name animation by 1st removing the animation class and re-adding it thereafter
    //     document.querySelector(".Country-Name").classList.remove("slide-right");
    //     // Simulating a delay before re-adding the animation class
    //     setTimeout(
    //       () =>
    //         document
    //           .querySelector(".Country-Name")
    //           .classList.add("slide-right"),
    //       1
    //     );
    //   });

    // || NEW FETCH CALL: ASYNC
    async function fetchData(props) {
      const borderURL = `https://restcountries.com/v3.1/alpha/${props.border}`;

      try {
        props.updateIsLoading(true);

        const response = await fetch(borderURL);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const countryData = await response.json();

        // UPDATING THE countryInfo CONTEXT
        updateCountryInfo(countryData);

        // TRIGGER country name animation
        const countryNameElement = document.querySelector(".Country-Name");
        countryNameElement.classList.remove("slide-right");

        // Simulate a delay before re-adding the animation class
        await new Promise((resolve) => setTimeout(resolve, 1));

        countryNameElement.classList.add("slide-right");
      } catch (error) {
        console.error("Error:", error);
        // ||   Navigate to designated error page
        navigate("/GoCountry/error");
      }
      props.updateIsLoading(false);
    }

    // Call the fetchData function with props
    fetchData(props);
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
