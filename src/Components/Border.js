import "./Border.css";

const Border = (props) => {
  return (
    <button type="button" className="Border">
      {props.border}
    </button>
  );
};
export default Border;
