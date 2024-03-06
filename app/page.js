"use client";

import { useEffect, useState } from "react";
import EventCard from "./(components)/EventCard";

const getEvents = async () => {
  try {
    const res = await fetch("/api/Events", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return { events: [] }; // Return an empty array in case of error
  }
};

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const data = await getEvents();
    const currentDate = new Date();
    const futureEvents = data.events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > currentDate;
    });
    const sortedEvents = futureEvents.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
    setEvents(sortedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <main className="bg-BgColor min-h-screen">
      <div className="text-white text-center text-3xl py-10">Eventos</div>
      <div className="grid grid-cols-4 mx-10">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </main>
  );
};

export default Home;
