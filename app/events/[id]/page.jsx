import EventDetails from "@/app/(components)/EventDetails";
import React from "react";

const getEventById = async (id) => {
  const res = await fetch(`/api/Events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }
  return res.json();
};

const EventDetailsPage = async ({ params }) => {
  let eventData = await getEventById(params.id);
  eventData = eventData.foundEvent;
  return (
    <div>
      <EventDetails event={eventData}></EventDetails>
    </div>
  );
};

export default EventDetailsPage;
