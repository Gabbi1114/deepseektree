import React from 'react';
import HandTracker from './components/HandTracker';
import Experience from './components/Experience';
import IntroOverlay from './components/IntroOverlay';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <IntroOverlay />
      <Experience />
      <HandTracker />
    </div>
  );
};

export default App;
