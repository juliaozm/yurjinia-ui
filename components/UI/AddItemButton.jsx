import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Button = styled.button({
  display: "flex",
  alignSelf: "flex-start",
  alignItems: "center",
  color: "black",
  padding: "5px 10px",
  margin: "1rem 0",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",

  "&:hover": {
    color: "#007bff",
  },
});

export default function AddItemButton({ children, onClick }) {
  return (
    <Button type="submit" onClick={onClick}>
      <MdAdd size={20} style={{ marginRight: "5px" }} /> {children}
    </Button>
  );
}
