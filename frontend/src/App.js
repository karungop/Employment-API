import React from 'react';
import ClockInOut from './components/ClockInOut';
import EditHours from './components/EditHours';
import PickUpShifts from './components/PickUpShifts';
import Navbar from './components/Navbar';
import UpcomingShifts from './components/UpcomingShifts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Welcome to Workday Clone</h1>
        <p className="text-muted text-center">Easily manage your work shifts and hours!</p>
      </div>
      <div className="container">
        <h1 className="mt-4">Workday Management</h1>
        <ClockInOut />
        <EditHours />
        <UpcomingShifts />
        <PickUpShifts />
      </div>
    </div>
  );
}

export default App;
