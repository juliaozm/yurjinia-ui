import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  margin: "auto",
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

const FormField = styled.div({
  marginBottom: "1rem",
});

const Label = styled.label({
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "bold",
  color: "#333",
});

const Input = styled.input({
  width: "100%",
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",

  "&:focus": {
    borderColor: "#61dafb",
    outline: "none",
    boxShadow: "0 0 4px rgba(97, 218, 251, 0.5)",
  },
});

const Select = styled.select({
  width: "100%",
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",

  "&:focus": {
    borderColor: "#61dafb",
    outline: "none",
    boxShadow: "0 0 4px rgba(97, 218, 251, 0.5)",
  },
});

const Button = styled.button({
  backgroundColor: "#61dafb",
  color: "#282c34",
  padding: "0.75rem",
  border: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  textAlign: "center",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#21a1f1",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 4px rgba(97, 218, 251, 0.5)",
  },
});

export default function LongForm({
  fields,
  title,
  handleChange,
  handleSubmit,
  buttonText,
}) {
  return (
    <FormWrapper>
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <FormField key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "select" ? (
                <Select
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  required={field.required}
                >
                  <option value="" disabled>
                    Select your {field.name}
                  </option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </FormField>
          );
        })}
        <Button type="submit">{buttonText}</Button>
      </Form>
    </FormWrapper>
  );
}
