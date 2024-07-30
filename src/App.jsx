import { useCallback, useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setValue((v) => v + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <h1>Progress bar</h1>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
