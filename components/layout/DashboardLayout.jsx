import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SidebarProjects from "../nav/SidebarProjects";
import Header from "../nav/Header";

const LayoutWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
});

const MainContent = styled.div({
  display: "flex",
  width: "100%",
  color: "#282c34",
  backgroundColor: "#f0f0f0",
  minHeight: "calc(100vh - 4rem)", // remaining viewport height minus the header
});

export default function DashboardLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <SidebarProjects />
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
}
