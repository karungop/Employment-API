import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/react/dist/vdom'; // Required for React 18+

// Import CSS for FullCalendar
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/core/main.css';

const EditHours = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt('Enter hours worked (e.g., "8:00 AM - 12:00 PM"):', '');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: info.dateStr,
          end: info.dateStr,
        },
      ]);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Edit Hours</h2>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        editable={true}
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default EditHours;
