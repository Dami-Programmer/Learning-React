import "./NewEventForm.css";

import React from "react";

export default function NewEventForm() {
  return (
    <div>
      <form className="new-events-form">
        <label>
          <span>Event Title:</span>
          <input type="text" />
        </label>
        <label>
          <span>Event Date:</span>
          <input type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
