import React from 'react';

const PickUpShifts = () => {
  const shifts = ['Morning Shift', 'Afternoon Shift', 'Night Shift'];

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
