import "./App.css";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
/* import UncontrolledExample from "./components/carousel"; */
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/body/Body";

function App() {
  return (
    <>
      <Header />
      <Body />

      {/* <UncontrolledExample /> */}

      <Footer />
    </>
  );
}

export default App;
