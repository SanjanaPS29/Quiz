import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import ViewHighscores from "./components/pages/ViewHighscores";
import Result from "./components/pages/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="highscore" element={<ViewHighscores />} />
          <Route path="questions" element={<Questions />} />
          <Route path="result" element={<Result />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
