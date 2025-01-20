import React from 'react';

const EditHours = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="container mt-4">
      <h3>Edit Hours</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours Worked</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              <td>
                <input type="number" className="form-control" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditHours;
