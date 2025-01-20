import React from 'react';
import ClockInOut from './components/ClockInOut';
import EditHours from './components/EditHours';
import PickUpShifts from './components/PickUpShifts';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-4">Workday Management</h1>
        <ClockInOut />
        <EditHours />
        <PickUpShifts />
      </div>
    </div>
  );
}

export default App;
