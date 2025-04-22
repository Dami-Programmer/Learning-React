import "./NewEventForm.css";

import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      date,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <div>
      <form className="new-events-form" onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
