import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/app.css";
import EventPage from "./pages/EventPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/events" element={<EventPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
