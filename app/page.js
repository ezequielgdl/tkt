import Image from "next/image";
import EventCard from "./(components)/EventCard";
import EventDetails from "./(components)/EventDetails";

export default function Home() {
  const events = [
    {
      id: "001",
      title: "JAZZ CONCERT",
      date: "",
      venue: "CASA ASTOR",
      price: 23.99,
    },
    {
      id: "002",
      title: "FOLK CONCERT",
      date: "",
      venue: "CASA ASTOR",
      price: 10,
    },
    {
      id: "003",
      title: "ROCK CONCERT",
      date: "",
      venue: "CASA ASTOR",
      price: 20,
    },
    {
      id: "004",
      title: "BOSSA CONCERT",
      date: "",
      venue: "CASA ASTOR",
      price: 13,
    },
    {
      id: "005",
      title: "POP CONCERT",
      date: "",
      venue: "CASA ASTOR",
      price: 15,
    },
  ];
  return (
    <main className="bg-BgColor">
      <div className="text-white text-center text-3xl">Eventos</div>
      <div className="grid grid-cols-4 mx-10">
        {events.map((event) => {
          return <EventCard key={event.id} event={event}></EventCard>;
        })}
      </div>
    </main>
  );
}
