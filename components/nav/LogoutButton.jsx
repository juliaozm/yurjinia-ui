import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../src/context/UserProvider";

const Button = styled.button({
  display: "block",
  padding: "1rem 0",
  fontWeight: "400",
  fontSize: "0.8rem",
  color: "black",
  lineHeight: "1rem",
  border: "none",
  boxShadow: "none",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "none",
  },

  "&:active": {
    outline: "none",
  },
});

export default function LogoutButton() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    setCurrentUser(null);
    navigate("/");
  };

  return <Button onClick={handleLogOut}>Log out</Button>;
}
