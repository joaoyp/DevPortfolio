import "../../resources/css/App.css";
import darkmode from "../../resources/images/DarkMode.png";

export const DarkMode = () => {
  return (
    <div style={{ display: "inline" }}>
      <img className="darkMode" src={darkmode} alt="Dark Mode" />
      <span>Dark Mode</span>
    </div>
  );
};
