import "./App.css";
import NavbarScreen from "./features/Common/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./features/Home/home";

function App() {
  return (
    <div>
      <NavbarScreen />
      <Home />
    </div>
  );
}

export default App;
