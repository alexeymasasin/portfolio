import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import GradientBackground from "./ui/GradientBackground/GradientBackground";
import Intro from "./sections/Intro/Intro";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
      <GradientBackground />
    </div>
  );
}

export default App;
