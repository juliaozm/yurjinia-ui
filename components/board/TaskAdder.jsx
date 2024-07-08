import React, { useState } from "react";
import AddItemButton from "../../components/UI/AddItemButton";
import AddItemForm from "../../components/UI/AddItemForm";

export default function TaskAdder({ column, setColumns }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState("");

  const handleFormChange = (e) => {
    setFormData(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      setColumns((prevColumns) =>
        prevColumns.map((col) => {
          if (col.id === column.id) {
            return {
              ...col,
              tasks: [
                ...col.tasks,
                {
                  id: col.tasks.length
                    ? col.tasks[col.tasks.length - 1].id + 1
                    : 1,
                  description: formData,
                },
              ],
            };
          }
          return col;
        })
      );
    }
    setIsModalOpen(!isModalOpen);
    setFormData({});
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isModalOpen ? (
        <AddItemButton onClick={() => setIsModalOpen(!isModalOpen)}>
          Add new task
        </AddItemButton>
      ) : (
        <AddItemForm
          formData={formData}
          placeholder="Enter a short task description"
          handleFormChange={handleFormChange}
          handleFormSubmit={handleTaskSubmit}
          closeForm={closeForm}
        ></AddItemForm>
      )}
    </>
  );
}
