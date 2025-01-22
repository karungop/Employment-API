import React from 'react';

const UpcomingShifts = () => {
  const shifts = ['8:00 AM, Feb 9th', '2:00 PM, Feb 10th', '12:00 PM, Feb 12th'];

  return (
    <div className="container mt-4">
      <h3>Upcoming Shifts</h3>
      <ul className="list-group">
        {shifts.map((shift, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {shift}
            <button className="btn btn-primary btn-sm">Request Off</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingShifts;
