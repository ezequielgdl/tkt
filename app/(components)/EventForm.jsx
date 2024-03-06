"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EventForm = ({ user }) => {
  const router = useRouter();
  const startingEventData = {
    title: "",
    date: "",
    venue: "",
    description: "",
    url: "",
    price: 0,
    organiser: "",
    user: user,
  };

  const [formData, setFormData] = useState(startingEventData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Events/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("failed to create event");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center bg-BgColor text-white h-screen">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Nuevo Evento</h3>
        <label htmlFor="title">Nombre</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="organiser">Organizador</label>
        <input
          type="text"
          name="organiser"
          id="organiser"
          onChange={handleChange}
          required={true}
          value={formData.organiser}
        />
        <label htmlFor="description">Descripción</label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows={5}
          onChange={handleChange}
          required={true}
          value={formData.description}
        />
        <label htmlFor="venue">Lugar</label>
        <input
          type="text"
          name="venue"
          id="venue"
          onChange={handleChange}
          required={true}
          value={formData.venue}
        />
        <label htmlFor="date">Fecha</label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          onChange={handleChange}
          required={true}
          value={formData.date}
        />
        <label htmlFor="url">Link del Organizador</label>
        <input
          type="url"
          name="url"
          id="url"
          onChange={handleChange}
          required={true}
          value={formData.url}
        />
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          required={true}
          value={formData.price}
          min="0"
        />
        <input type="submit" className="btn" value="Crear Evento" />
      </form>
    </div>
  );
};

export default EventForm;
