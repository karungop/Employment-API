import React from 'react';

const PickUpShifts = () => {
  const shifts = ['8:00 AM, Feb 9th', '2:00 PM, Feb 10th', '12:00 PM, Feb 12th'];

  return (
    <div className="container mt-4">
      <h3>Pick Up Shifts</h3>
      <ul className="list-group">
        {shifts.map((shift, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {shift}
            <button className="btn btn-primary btn-sm">Pick Up</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickUpShifts;
