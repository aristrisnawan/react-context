import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggkeTheme from "./components/ToggkeTheme";
import { AppProvider } from "./context/app-context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <DisplayTheme />
        <ToggkeTheme />
      </AppProvider>
    </div>
  );
}

export default App;
