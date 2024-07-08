import React, { useContext, useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../src/context/UserProvider";
import AccountInfo from "./AccountInfo";
import UserAvatar from "../UI/UserAvatar";

const HeaderWrapper = styled.header({
  width: "100%",
  display: "flex",
  height: "4rem",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#282c34",
  color: "white",

  "@media (max-width: 768px)": {
    padding: "1rem",
  },
});

const Logo = styled(Link)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none",

  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
});

const AvatarWrapper = styled.div((props) => ({
  position: "relative",
}));

const NavButtons = styled.div({
  display: "flex",
  gap: "1rem",

  "@media (max-width: 768px)": {
    gap: "0.5rem",
  },
});

const Button = styled(Link)({
  backgroundColor: "#61dafb",
  color: "#282c34",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#21a1f1",
  },

  "@media (max-width: 768px)": {
    padding: "0.4rem 0.8rem",
  },
});

export default function Header() {
  const { currentUser } = useContext(CurrentUserContext);

  const [isInfoOpen, setInfoOpen] = useState(false);

  const handleToggle = () => {
    setInfoOpen(!isInfoOpen);
  };

  const handleClickAway = () => {
    if (isInfoOpen) {
      setInfoOpen(false);
    }
  };

  return (
    <HeaderWrapper>
      <Logo to="/dashboard">Yurjinia</Logo>
      {currentUser !== null ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <AvatarWrapper>
            <UserAvatar
              image={currentUser.avatar}
              handleOnClick={handleToggle}
            />
            <AccountInfo user={currentUser} isOpen={isInfoOpen} />
          </AvatarWrapper>
        </ClickAwayListener>
      ) : (
        <NavButtons>
          <Button to="/login">Login</Button>
          <Button to="/register">Register</Button>
        </NavButtons>
      )}
    </HeaderWrapper>
  );
}
