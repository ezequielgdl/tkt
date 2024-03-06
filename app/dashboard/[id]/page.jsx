import UpdateForm from "@/app/(components)/UpdateForm";
import { getServerSession } from "next-auth";
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

const UpdateFormPage = async ({ params }) => {
  const session = await getServerSession();
  const user = session.user?.email;
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  let eventData = await getEventById(params.id);
  eventData = eventData.foundEvent;
  return (
    <div>
      <UpdateForm event={eventData} user={user}></UpdateForm>
    </div>
  );
};

export default UpdateFormPage;
