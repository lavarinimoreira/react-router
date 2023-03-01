import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  // 6 - redirect
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Send!");
    return navigate("/");
  };

  return (
    <div>
      <h2>More infos about: {id}</h2>
      <button onClick={handleContact}>Send</button>
    </div>
  );
};

export default ContactDetails;
