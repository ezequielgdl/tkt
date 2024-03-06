import Link from "next/link";
import { es } from "date-fns/locale";
import { format } from "date-fns";

const EventCard = ({ event }) => {
  const eventDate = event.date;
  const formattedDate = format(new Date(eventDate), "EEE dd, MMM yyyy", {
    locale: es,
  });

  return (
    <Link href={`/events/${event._id}`}>
      <div className="bg-CardColor/30 rounded-lg shadow-md p-4 m-4 text-white flex flex-col items-center">
        <img src="/ticket.svg" alt="event-image" className="pb-5 w-1/2" />
        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
        <p>{formattedDate}</p>
        <p>{event.venue}</p>
        <p className="text-Accent">€{event.price}</p>
      </div>
    </Link>
  );
};

export default EventCard;
