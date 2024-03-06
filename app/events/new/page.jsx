import EventForm from "@/app/(components)/EventForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

const NewEventForm = async () => {
  const session = await getServerSession();
  const user = session.user?.email;
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return <EventForm user={user} />;
};

export default NewEventForm;
