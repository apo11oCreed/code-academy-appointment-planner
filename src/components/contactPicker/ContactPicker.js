import React from "react";

export const ContactPicker = (props) => {

  const {contacts,onChange}=props;
  
  return (
    <select name="contacts" id="contactSelect">
      <option key='0' value='No contact selected' defaultValue >No contact selected</option>
      {
        Object.values(contacts).map((item,index)=>{
          return <option key={index + 1} value={item.name} >{item.name}</option>
        })
      }
    </select>
  );
};
