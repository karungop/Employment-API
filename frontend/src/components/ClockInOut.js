import React, { useState } from 'react';

const ClockInOut = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleClock = () => {
    setIsClockedIn(!isClockedIn);
  };

  return (
    <div className="container mt-4">
      <button 
        className={`btn ${isClockedIn ? 'btn-danger' : 'btn-success'}`} 
        onClick={handleClock}
      >
        {isClockedIn ? 'Clock Out' : 'Clock In'}
      </button>
    </div>
  );
};

export default ClockInOut;
