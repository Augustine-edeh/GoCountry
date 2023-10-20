import ReactDOM from "react-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return ReactDOM.createPortal(
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>,
    document.querySelector("#loadingSpinner-root")
  );
};
export default LoadingSpinner;
