"use client";

const DeleteButton = ({ id, onDelete }) => {
  const deleteTicket = async () => {
    const res = await fetch(`/api/Events/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      onDelete();
    }
  };

  return (
    <button className="btn w-1/3 h-1/6 text-sm" onClick={deleteTicket}>
      eliminar
    </button>
  );
};

export default DeleteButton;
