import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  };

  // title, contact, date, and time
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" required />
      <label htmlFor="date" min={getTodayString()}>Date</label>
      <input type="date" id="date" />
      <label htmlFor="time">Time</label>
      <input type="time" id="time" />
      <label htmlFor="contact">Contact</label>
      <ContactPicker id="contact" contacts={contacts} />
      <input type="submit" id="submitButton" value="Add Appointment" />
    </form>
  );
};
