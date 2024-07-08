import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const DropdownContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0.5rem",
});

const DropdownButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  padding: "1rem",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",

  "@media (max-width: 768px)": {
    fontSize: "0.8rem",
    padding: "0.5rem 0.75rem",
  },
});

const DropdownContent = styled.div((props) => ({
  display: props.$isVisible ? "block" : "none",
  backgroundColor: "#f9f9f9",
  minWidth: "160px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: 1,
  marginTop: "5px",
  borderRadius: "4px",
}));

const DropdownLink = styled(Link)({
  color: "black",
  textDecoration: "none",
  display: "block",

  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
});

const DropdownHeader = styled(DropdownLink)({
  fontWeight: "bold",
});

const DropdownContentList = styled.ul({
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

const ToggleButton = styled.button({
  backgroundColor: "#007bff",
  color: "white",
  padding: "5px 10px",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "10px",
});

const DropdownItemLink = styled(Link)({
  display: "block",
  color: "black",
  textDecoration: "none",
});

const DropdownItem = styled.li({
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#ddd",
  },
});

export default function Dropdown({
  fields,
  items,
  toggleDropdown,
  openDropdowns,
  fieldLink,
  itemLink,
}) {
  return (
    <>
      {fields.map((field) => (
        <DropdownContainer key={field.id}>
          <DropdownButton>
            <DropdownHeader to={fieldLink(field.id)}>
              {field.name}
            </DropdownHeader>
            <ToggleButton onClick={() => toggleDropdown(field.id)}>
              {openDropdowns[field.id] ? <FaArrowUp /> : <FaArrowDown />}
            </ToggleButton>
          </DropdownButton>
          <DropdownContent $isVisible={openDropdowns[field.id]}>
            <DropdownContentList>
              {field[items].map((item) => (
                <DropdownItem key={item.id}>
                  <DropdownItemLink to={itemLink(field.id, item.id)}>
                    {item.name}
                  </DropdownItemLink>
                </DropdownItem>
              ))}
            </DropdownContentList>
          </DropdownContent>
        </DropdownContainer>
      ))}
    </>
  );
}
