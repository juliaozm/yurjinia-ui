import React from "react";
import styled from "styled-components";
import ColumnItem from "./ColumnItem";
import ColumnAdder from "./ColumnAdder";

const ColumnListWrapper = styled.ul({
  position: "absolute",
  left: "2rem", // Align with the layout's padding
  right: "2rem",
  top: "3rem",

  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap",
  alignItems: "flex-start",

  gap: "1.5rem",
  marginRight: "-2rem",
  marginLeft: "-2rem",
  padding: "1rem 1rem 2rem 1rem",

  // Apply scrollbar styling
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },

  "@media (max-width: 768px)": {
    left: "1rem",
    right: "1rem",
    top: "8rem",
    marginRight: "-1rem",
    marginLeft: "-1rem",
  },
});

export default function ColumnList({ columns, setColumns }) {
  return (
    <ColumnListWrapper>
      {columns && columns.length
        ? columns.map((column) => (
            <ColumnItem
              key={column.id}
              column={column}
              setColumns={setColumns}
            />
          ))
        : null}
      <ColumnAdder setColumns={setColumns}></ColumnAdder>
    </ColumnListWrapper>
  );
}
