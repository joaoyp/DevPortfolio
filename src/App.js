import "./resources/css/App.css";
import { RouterPage } from "./routes/Router";
import { TopBar } from "./components/Header/TopBar";
import { DarkMode } from "./components/Header/DarkMode";
import { Portugal } from "./components/Header/LanguagePT";
import { English } from "./components/Header/LanguageEN";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DarkMode />
      <Portugal />
      <English />
      <RouterPage />
    </div>
  );
}

export default App;
