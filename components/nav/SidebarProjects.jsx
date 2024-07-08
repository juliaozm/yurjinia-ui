import React from "react";
import styled from "styled-components";
import Sidebar from "../UI/Sidebar";

const SidebarWrapper = styled.div((props) => ({
  maxWidth: "16rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  padding: "0.5rem",
  zIndex: "2",

  "@media (max-width: 768px)": {
    position: "absolute",
    top: "5rem",
    left: "1em",
    width: "220px",
    borderRadius: "0.5rem",
  },
}));

const menu = {
  name: "My projects",
  link: "/dashboard",
  fields: [
    {
      id: 1,
      name: "Project ocean",
      boards: [
        {
          id: 1,
          name: "Board 1",
        },
        {
          id: 2,
          name: "Board 2",
        },
        {
          id: 3,
          name: "Board 3",
        },
      ],
    },
    {
      id: 2,
      name: "2 doors",
      boards: [
        {
          id: 4,
          name: "Board 1",
        },
        {
          id: 5,
          name: "Board 2",
        },
        {
          id: 6,
          name: "Board 3",
        },
      ],
    },
  ],
};

export default function SidebarProjects() {
  const projectLink = (projectId) => `/dashboard/${projectId}`;

  const boardLink = (projectId, boardId) =>
    `/dashboard/${projectId}/${boardId}`;

  return (
    <SidebarWrapper>
      <Sidebar
        menu={menu}
        items="boards"
        fieldLink={projectLink}
        itemLink={boardLink}
      />
    </SidebarWrapper>
  );
}
