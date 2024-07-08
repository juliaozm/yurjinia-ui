import React from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import TaskAdder from "./TaskAdder";

const ColumnWrapper = styled.li({
  display: "flex",
  flexDirection: "column",
  flex: "0 0 200px",
  minWidth: "260px",
  padding: "1rem",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: "white",
  borderRadius: "1rem",
});

const ColumnTitle = styled.h3({
  display: "flex",
  width: "100%",
  height: "100px",
  fontSize: "2rem",
  fontWeight: "700",
  padding: "0.5rem",
  margin: "0",
  alignItems: "center",
  justifyContent: "center",
  border: "1px dashed black",
  borderRadius: "0.5rem",
});

export default function Column({ column, setColumns }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>{column.name}</ColumnTitle>
      <TaskAdder column={column} setColumns={setColumns}></TaskAdder>
      <TaskList column={column}></TaskList>
    </ColumnWrapper>
  );
}
