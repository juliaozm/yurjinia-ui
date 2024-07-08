import React from "react";
import styled from "styled-components";
import { MdClear } from "react-icons/md";

const Button = styled.button({
  display: "flex",
  alignSelf: "flex-start",
  alignItems: "center",
  color: "black",
  padding: "5px",
  margin: "1rem",
  fontSize: "0.8rem",
  borderRadius: "4px",
  cursor: "pointer",

  "&:hover": {
    color: "#007bff",
  },
});

export default function DeleteButton({ handleClick }) {
  return (
    <Button type="button" onClick={handleClick}>
      <MdClear size={20} />
    </Button>
  );
}
