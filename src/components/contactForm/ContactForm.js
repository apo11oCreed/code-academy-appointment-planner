import React from "react";

export const ContactForm = ({
  onChange,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" required />
      <label htmlFor="phone">Phone Number (xxx-xxx-xxxx)</label>
      <input type="text" id="phone" pattern="[0-9]{3,3}-[0-9]{3,3}-[0-9]{4,4}" />
      <label htmlFor="email">Email Address</label>
      <input type="text" id="email" />
      <input type="submit" id="submitButton" value="Add Contact" />
    </form>
  );
};
