import Header from "./header/Header";
import IntroBanner from "./sections/intro-banner/IntroBanner";
import GradientBackground from "./ui/GradientBackground/GradientBackground";

function App() {
  return (
    <div className="container">
      <Header />
      <IntroBanner />
      <GradientBackground />
    </div>
  );
}

export default App;
