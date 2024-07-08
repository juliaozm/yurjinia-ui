import React, { useState } from "react";
import styled from "styled-components";
import AddItemButton from "../../components/UI/AddItemButton";
import AddItemForm from "../../components/UI/AddItemForm";

const ColumnAdderWrapper = styled.div({
  display: "flex",
  flex: "0 0 200px",
  minWidth: "260px",
  padding: "1rem",
  justifyContent: "center",
  borderRadius: "1rem",
  background: "transparent",
  border: "1px dashed black",
});

export default function ColumnAdder({ setColumns }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState("");

  const handleFormChange = (e) => {
    setFormData(e.target.value);
  };

  const handleColumnSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      setColumns((prev) => [
        ...prev,
        {
          id: prev.length ? prev[prev.length - 1].id + 1 : 1,
          name: formData,
          tasks: [],
        },
      ]);
    }
    setIsModalOpen(!isModalOpen);
    setFormData("");
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  return (
    <ColumnAdderWrapper>
      {!isModalOpen ? (
        <AddItemButton onClick={() => setIsModalOpen(!isModalOpen)}>
          Add new column
        </AddItemButton>
      ) : (
        <AddItemForm
          formData={formData}
          placeholder="Enter column name"
          handleFormChange={handleFormChange}
          handleFormSubmit={handleColumnSubmit}
          closeForm={closeForm}
        ></AddItemForm>
      )}
    </ColumnAdderWrapper>
  );
}
