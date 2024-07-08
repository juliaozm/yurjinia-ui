import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const SidebarHeader = styled.div({
  margin: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 768px)": {
    margin: 0,
  },
});

const SidebarTitle = styled(Link)({
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "700",
  margin: "0.5rem",

  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
});

const ArrowButton = styled.button({
  display: "none",
  background: "none",
  border: "none",
  boxShadow: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,

  "&:hover, &:active": {
    boxShadow: "none",
  },

  "@media (max-width: 768px)": {
    display: "block",
  },
});

const DropdownContent = styled.div((props) => ({
  "@media(max-width: 768px)": {
    display: props.$visible ? "block" : "none",
  },
}));

export default function Sidebar({ menu, items, fieldLink, itemLink }) {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleDropdown = (projectId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const handleOpenSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <SidebarHeader>
        <SidebarTitle to={menu.link}>{menu.name}</SidebarTitle>
        <ArrowButton onClick={handleOpenSidebar}>
          {isOpenSidebar ? (
            <RxDoubleArrowLeft size={20} />
          ) : (
            <RxDoubleArrowRight size={20} />
          )}
        </ArrowButton>
      </SidebarHeader>
      <DropdownContent $visible={isOpenSidebar}>
        <Dropdown
          fields={menu.fields}
          items={items}
          toggleDropdown={toggleDropdown}
          openDropdowns={openDropdowns}
          fieldLink={fieldLink}
          itemLink={itemLink}
        />
      </DropdownContent>
    </>
  );
}
