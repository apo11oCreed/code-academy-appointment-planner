import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const { contacts,appointments,addAppointment }=props;

  const [title, setTitle]=useState('');
  const [contact, setContact]=useState('');
  const [date, setDate]=useState('');
  const [time, setTime]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const { title, contactSelect, date, time} = e.target.elements;

    const obj={};
    obj.title=title.value;
    obj.contact=contactSelect.value;
    obj.date=date.value;
    obj.time=time.value;
    addAppointment(obj);

    title.value='';
    contactSelect.value='';
    date.value='';
    time.value='';
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        setTitle={setTitle} 
        contacts={contacts}
        contact={contact} 
        setContact={setContact} 
        date={date} 
        setDate={setDate} 
        time={time} 
        setTime={setTime}
        handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
