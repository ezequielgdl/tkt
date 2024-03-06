"use client";

import { useEffect, useState } from "react";
import DeleteButton from "../(components)/DeleteButton";
import EventCard from "../(components)/EventCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const getEventsByUser = async () => {
  try {
    const res = await fetch("/api/Events", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "loading") return;
      if (!session || !session.user) {
        router.push("/api/auth/signin");
        return;
      }
      handleFetchEvents();
    };

    fetchData();
  }, [status, session, router]);

  const handleFetchEvents = async () => {
    const userEmail = session.user.email;
    const data = await getEventsByUser();
    const filteredEvents = data.events.filter(
      (event) => event.user === userEmail
    );
    const currentDate = new Date();
    const futureEvents = filteredEvents.filter(
      (event) => new Date(event.date) > currentDate
    );
    const pastEvents = filteredEvents.filter(
      (event) => new Date(event.date) <= currentDate
    );
    setFutureEvents(futureEvents);
    setPastEvents(pastEvents);
  };

  const handleDelete = async () => {
    await handleFetchEvents();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-BgColor text-white min-h-screen">
      <div className="text-white text-3xl mx-10 pt-10">Mis Eventos</div>
      <div className="flex mx-10 w-1/5">
        <button onClick={() => setModal(true)} className="btn w-30 my-5 mr-5">
          Futuros
        </button>
        <button onClick={() => setModal(false)} className="btn w-30 my-5">
          Pasados
        </button>
      </div>
      {modal ? (
        <>
          <h2 className="text-lg mx-10">Eventos Futuros</h2>
          <div className="grid grid-cols-4 mx-10">
            {futureEvents.map((event) => (
              <div key={event._id}>
                <EventCard key={event._id} event={event} />
                <div className="flex justify-center">
                  <Link
                    href={`/dashboard/${event._id}`}
                    className="btn mb-1 mr-2 w-1/3 h-1/6 text-sm"
                  >
                    editar
                  </Link>
                  <DeleteButton id={event._id} onDelete={handleDelete} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg text-white mx-10">Eventos Pasados</h2>
          <div className="grid grid-cols-4 mx-10">
            {pastEvents.map((event) => (
              <div key={event._id}>
                <EventCard key={event._id} event={event} />
                <div className="flex justify-center">
                  <DeleteButton id={event._id} onDelete={handleDelete} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
