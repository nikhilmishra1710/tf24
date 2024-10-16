import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/app.css";
import EventPage from "./pages/EventPage";
import DeveloperPage from "./pages/DeveloperPage";
import TeamPage from "./pages/TeamPage";

import Loading from "@components/Loading/Loading"; // Loading component
import BigBang from "@components/BigBang/BigBang";

function App() {
    

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BigBang />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/developers" element={<DeveloperPage />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>
        </div>
    );
}

export default App;
