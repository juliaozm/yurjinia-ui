import React from "react";
import styled from "styled-components";
import AddItemButton from "./AddItemButton";
import DeleteButton from "./DeleteButton";

const FormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  margin: "1rem auto",
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    padding: "1rem",
  },
});

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const TextArea = styled.textarea({
  minWidth: "210px",
  maxWidth: "210px",
  minHeight: "36px",
  maxHeight: "160px",
  borderRadius: "0.25rem",
  border: "1px solid #ccc",
  fontSize: "1rem",
  overflowX: "hidden",
  overflowY: "scroll",

  // Apply scrollbar styling
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-thumb:active": {
    backgroundColor: "#61dafb",
  },

  "&:focus": {
    borderColor: "#61dafb",
    outline: "none",
    boxShadow: "0 0 4px rgba(97, 218, 251, 0.5)",
  },
});

const ButtonArea = styled.div({
  display: "flex",
});

export default function AddItemForm({
  formData,
  placeholder,
  handleFormChange,
  handleFormSubmit,
  closeForm,
}) {
  return (
    <FormWrapper>
      <Form onSubmit={handleFormSubmit}>
        <TextArea
          name="description"
          value={formData.value}
          placeholder={placeholder}
          rows="4"
          required
          onChange={handleFormChange}
        ></TextArea>
        <ButtonArea>
          <AddItemButton>Add</AddItemButton>
          <DeleteButton handleClick={closeForm}></DeleteButton>
        </ButtonArea>
      </Form>
    </FormWrapper>
  );
}
