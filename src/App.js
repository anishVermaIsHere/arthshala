import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
      </div>
    </Router>
  );
}

export default App;
