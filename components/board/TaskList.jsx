import React from "react";
import styled from "styled-components";

const TaskListWrapper = styled.ul({
  listStyle: "none",
  width: "100%",
  padding: 0,
  margin: 0,
});

const TaskItem = styled.li({
  border: "1px solid gray",
  borderRadius: "4px",
  padding: "0.5rem",
  margin: "0.5rem 0",
});

const TaskHeader = styled.h4({
  fontSize: "0.9rem",
  lineHeight: "1.2rem",
  fontWeight: "700",
  margin: "0.5rem 0.2rem",
});

const TaskBody = styled.p({
  fontSize: "0.9rem",
  lineHeight: "1.3rem",
  margin: "0.5rem 0.2rem",
});

export default function TaskList({ column }) {
  return (
    <TaskListWrapper>
      {column.tasks && column.tasks.length > 0
        ? column.tasks.map((task) => (
            <TaskItem key={task.id}>
              <TaskHeader>Task {column.tasks.indexOf(task) + 1} </TaskHeader>
              <TaskBody>{task.description}</TaskBody>
            </TaskItem>
          ))
        : null}
    </TaskListWrapper>
  );
}
