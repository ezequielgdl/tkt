import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="bg-CardColor/30 rounded-lg shadow-md p-4 m-4 text-white">
        <img src="./favicon.ico" alt="event-image" className="pb-5" />
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p>{event.date}</p>
        <p>{event.venue}</p>
        <p className="text-Accent">€{event.price}</p>
      </div>
    </Link>
  );
};

export default EventCard;
