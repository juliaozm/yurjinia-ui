import React, { useState, useContext } from "react";
import LongForm from "../UI/LongForm";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../src/context/UserProvider";

export default function LoginForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setCurrentUser({
      ...formData,
      name: "Name", // EXAMPLE
      surname: "Surname", // EXAMPLE
      email: "name.surname@gmail.com", // EXAMPLE
      avatar: `https://robohash.org/1.png?size=200x200`, // EXAMPLE
    });
    navigate("/dashboard");
  };

  const fields = [
    {
      name: "login",
      type: "text",
      label: "E-mail or username",
      value: formData.value,
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      value: formData.value,
      required: true,
    },
  ];

  return (
    <LongForm
      title="Login to account"
      buttonText="Login"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      fields={fields}
    />
  );
}
