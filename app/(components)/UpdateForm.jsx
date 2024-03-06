"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UpdateForm = ({ event }) => {
  const router = useRouter();
  const startingData = {
    ...event,
    date: event.date.slice(0, 16),
  };
  const [formData, setFormData] = useState(startingData);

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
    const res = await fetch(`/api/Events/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    if (!res.ok) {
      throw new Error("Failed to update ticket");
    }

    router.refresh();
    router.push("/dashboard");
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
        <input type="submit" className="btn" value="Actualizar Evento" />
      </form>
    </div>
  );
};

export default UpdateForm;
