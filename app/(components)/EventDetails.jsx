import { format } from "date-fns";
import { es } from "date-fns/locale";

const EventDetails = ({ event }) => {
  const eventDate = event.date;
  const formattedDate = format(eventDate, "EEE, dd MMM, h:mm a 'GMT'xxx", {
    locale: es,
  });
  return (
    <div className="bg-BgColor text-white min-h-screen">
      <div className="flex px-32 py-12">
        <img src="/ticket.svg" alt="event-image" className="h-64 mr-16" />
        <div>
          <h1 className="text-6xl mb-4">{event.title}</h1>
          <p className="text-2xl mb-2">{formattedDate}</p>
          <p className="text-2xl mb-2">{event.venue}</p>
          <p>
            Organizado por{" "}
            <a className="text-Accent/85 mb-2" href={event.url}>
              {event.organiser}
            </a>
          </p>
          <button className="bg-Accent/70 hover:bg-Accent text-white font-bold py-2 px-4 rounded mt-4">
            Buy Ticket - €{event.price}
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h1>About</h1>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
