import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="Form">
      <input
        type="text"
        className="Form-input"
        placeholder="Enter country name"
      />
      <button className="Form-button">Search</button>
    </form>
  );
};
export default SearchForm;
