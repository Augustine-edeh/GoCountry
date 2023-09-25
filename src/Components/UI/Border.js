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

        // // UPDATING THE countryInfo CONTEXT
        // updateCountryInfo(countryData);

        // TRIGGER country name animation
        const countryNameElement = document.querySelector(".Country-Name");
        countryNameElement.classList.remove("slide-right");

        await fetch(
          `https://api.timezonedb.com/v2.1/get-time-zone?key=XN1YFKSTBENU&format=json&by=position&lat=${countryData[0].capitalInfo.latlng[0]}&lng=${countryData[0].capitalInfo.latlng[1]}`
        )
          .then((response) => response.json())
          .then((data) => {
            // if (data.formatted.split(" ")[1].split(":")[0] > 12) {
            // }
            console.log(data.formatted.split(" ")[1].split(":")[0]);
            console.log(data.formatted.split(" ")[1].split(":")[1]);
            const hour = data.formatted.split(" ")[1].split(":")[0];
            const minute = data.formatted.split(" ")[1].split(":")[1];
            // console.log(hour, minute);
            const time24hr = `${hour}:${minute}`;

            function convertTo12HourFormat(time_24hr) {
              // Split the time into hours and minutes
              const [hours, minutes] = time_24hr.split(":");

              // Convert hours to a number
              const hoursNum = parseInt(hours, 10);

              // Determine whether it's "am" or "pm" based on the hours
              const period = hoursNum >= 12 ? "pm" : "am";

              // Calculate the 12-hour format hours
              const hours12 = hoursNum % 12 || 12; // 0 should be converted to 12

              // Construct the 12-hour format time string
              const time12hr = `${hours12}:${minutes} ${period}`;

              countryData[0].time = time12hr;
              // console.log(time12hr);
              // return time12hr;
            }
            convertTo12HourFormat(time24hr);

            // Example usage:
            // const time24hr = "14:30"; // Change this to the 24-hour time you want to convert
            // const time12hr = convertTo12HourFormat(time24hr);
            // console.log(time12hr); // Output: "2:30 pm"

            console.log(data.formatted);
            // console.log(data.formatted.split(" ")[1].split(":")[0]);

            countryData[0].date = data.formatted
              .split(" ")[0]
              .replace(/-/g, "/");
          });
        // UPDATING THE countryInfo CONTEXT
        updateCountryInfo(countryData);
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
