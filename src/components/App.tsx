import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header/Header";
import GradientBackground from "./ui/GradientBackground/GradientBackground";
import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import { useEffect, useState } from "react";

function App() {
    // Transitions
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={`container ${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Header />
            <Routes location={displayLocation}>
                <Route path="/" element={<Intro />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <GradientBackground />
        </div>
    );
}

export default App;
