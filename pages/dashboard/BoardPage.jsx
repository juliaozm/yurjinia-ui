import React, { useState } from "react";
import styled from "styled-components";
import ColumnList from "../../components/board/ColumnList";

const PageContent = styled.div({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  width: "100%",

  "@media (max-width: 768px)": {
    paddingLeft: "0",
  },
});

const PageTitle = styled.h2({
  fontSize: "2rem",
  margin: "1rem 2rem 1rem 2.5rem",

  "@media (max-width: 768px)": {
    margin: "6rem 1rem 0",
  },
});

const board = {
  id: 1,
  name: "Board 1",
};

export default function BoardPage() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      name: "Backlog",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "info",
        },
        {
          id: 2,
          name: "Task 2",
          description: "day",
        },
        {
          id: 3,
          name: "Task 3",
          description: "work",
        },
      ],
    },
    {
      id: 2,
      name: "To do",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "ololo",
        },
        {
          id: 2,
          name: "Task 2",
          description: "day",
        },
        {
          id: 3,
          name: "Task 3",
          description: "really",
        },
      ],
    },
    {
      id: 3,
      name: "In Progress",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "asfasfasf",
        },
        {
          id: 2,
          name: "Task 2",
          description: "wefwefwef",
        },
        {
          id: 3,
          name: "Task 3",
          description: "wefwefwef",
        },
      ],
    },
    {
      id: 4,
      name: "Code review",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "yes",
        },
        {
          id: 2,
          name: "Task 2",
          description: "world",
        },
        {
          id: 3,
          name: "Task 3",
          description: "hello",
        },
      ],
    },
    {
      id: 5,
      name: "Testing",
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "you",
        },
        {
          id: 2,
          name: "Task 2",
          description: "todo",
        },
        {
          id: 3,
          name: "Task 3",
          description:
            "Upon successful login or registration, the server generates a JWT that contains user-specific information like username, email, and avatar.",
        },
      ],
    },
    {
      id: 6,
      name: "Done",
      tasks: [],
    },
  ]);

  return (
    <PageContent>
      <PageTitle>{board.name}</PageTitle>
      <ColumnList columns={columns} setColumns={setColumns}></ColumnList>
    </PageContent>
  );
}
