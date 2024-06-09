import './Styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./Pages/Home";
import Media from "./Pages/Media";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        {/* <Navigate to="/" /> */}
      </Router>
    </>
  )
}

export default App;