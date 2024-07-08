import React from "react";
import styled from "styled-components";

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

export default function DashboardPage() {
  return (
    <PageContent>
      <PageTitle>Dashboard of all projects </PageTitle>
    </PageContent>
  );
}
