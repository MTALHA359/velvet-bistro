import './Events.css';

function Events() {
  const events = [
    {
      title: "Wine Tasting Night",
      date: "June 10, 2025",
      description: "Join us for an exclusive evening of fine wines and gourmet pairings.",
    },
    {
      title: "Live Jazz Dinner",
      date: "June 18, 2025",
      description: "Enjoy a live jazz performance with a specially curated dinner menu.",
    },
    {
      title: "Chef’s Table Experience",
      date: "June 24, 2025",
      description: "A one-night culinary journey with our head chef.",
    },
  ];

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2>{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
