document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'el',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    events: [
      {
        title: 'Συναυλία στο πάρκο',
        start: '2025-07-20'
      },
      {
        title: 'Έκθεση Τέχνης',
        start: '2025-07-22',
        end: '2025-07-24'
      },
      {
        title: 'Σεμινάριο Web Development',
        start: '2025-07-27T17:00:00'
      }
    ]
  });

  calendar.render();
});
