import "./NewEventForm.css";

import React, { useState, useRef } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const title = useRef();
  // const date = useRef();

  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    // title.current.value = "";
    // date.current.value = "";
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      // title: title.current.value,
      // date: date.current.value,
      title,
      date,
      location,
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
            // ref={title}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            // ref={date}
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Event location:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
