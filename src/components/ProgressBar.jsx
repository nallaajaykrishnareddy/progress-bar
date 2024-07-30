import { useEffect, useState } from 'react';

const MAX = 100;
const MIN = 0;

const ProgressBar = ({ value }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  return (
    <div className="progress-bar-container">
      <span style={{ color: percentage > 49 ? 'white' : 'black' }}>
        {percentage}%
      </span>
      <div
        style={{
          transform: `scaleX(${percentage / MAX})`,
          transformOrigin: 'left',
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percentage.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
