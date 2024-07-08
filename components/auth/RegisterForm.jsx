import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LongForm from "../UI/LongForm";
import { CurrentUserContext } from "../../src/context/UserProvider";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
    role: "",
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
      avatar: `https://robohash.org/1.png?size=200x200`, // EXAMPLE
    });
    navigate("/dashboard");
  };

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      value: formData.value,
      required: true,
    },
    {
      name: "surname",
      type: "text",
      label: "Surname",
      value: formData.value,
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
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
    {
      name: "passwordConfirm",
      type: "password",
      label: "Confirm password",
      value: formData.value,
      required: true,
    },
    {
      name: "username",
      type: "text",
      label: "Username",
      value: formData.value,
      required: false,
    },
    {
      type: "select",
      label: "Role",
      name: "role",
      value: formData.value,
      required: true,
      options: [
        {
          value: "engineer",
          label: "Engineer",
        },
        {
          value: "projectManager",
          label: "Project manager",
        },
      ],
    },
  ];

  return (
    <LongForm
      title="Register new user"
      buttonText="Register"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      fields={fields}
    />
  );
}
