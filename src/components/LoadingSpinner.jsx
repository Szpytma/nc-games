import { FaSpinner } from "react-icons/fa";
import "./LoadingSpinner.css";
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <FaSpinner className="LoadingSpinner-icon" />
    </div>
  );
}
export default LoadingSpinner;
