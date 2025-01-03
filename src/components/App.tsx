import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './header/Header';
import About from './sections/About/About';
import Intro from './sections/Intro/Intro';
import Projects from './sections/Projects/Projects';
import GradientBackground from './ui/GradientBackground/GradientBackground';

function App() {
	// Transitions
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState('fadeIn');

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage('fadeOut');
	}, [location, displayLocation]);

	return (
		<>
			<div
				className={`container ${transitionStage}`}
				onAnimationEnd={() => {
					if (transitionStage === 'fadeOut') {
						setTransistionStage('fadeIn');
						setDisplayLocation(location);
					}
				}}
			>
				<Header />
				<Routes location={displayLocation}>
					<Route path="/portfolio" element={<Intro />} />
					<Route path="/portfolio/about" element={<About />} />
					<Route path="/portfolio/projects" element={<Projects />} />
				</Routes>
			</div>
			<GradientBackground />
		</>
	);
}

export default App;
