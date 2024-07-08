import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserAvatar from "../UI/UserAvatar";
import LogoutButton from "./LogoutButton";

const InfoWrapper = styled.div((props) => ({
  display: props.$isVisible ? "block" : "none",
  position: "fixed",
  inset: "3.8rem auto auto calc(100vw - 17rem)",
  width: "16rem",
  padding: "1rem",
  backgroundColor: "white",
  color: "black",
  borderRadius: "1rem",
  zIndex: 5,
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
}));

const InfoTitle = styled.h3({
  fontWeight: "700",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  margin: "0.5rem 0",
});

const UserInfo = styled.div({
  display: "flex",
  maxWidth: "100%",
  padding: "0.5rem",
});

const UserData = styled.div({
  minWidth: "0",
});

const UserName = styled.div({
  marginTop: "5px",
  fontSize: "1rem",
  lineHeight: "1.3rem",
});

const UserEmail = styled.div({
  overflow: "hidden",
  fontSize: "0.8rem",
  lineHeight: "1rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const InfoSection = styled(Link)({
  textDecoration: "none",
  display: "block",
  padding: "1rem 0",
  fontWeight: "400",
  fontSize: "0.8rem",
  lineHeight: "1rem",
});

const InfoSectionLast = styled(InfoSection)({
  paddingTop: "1rem",
  borderBottom: "1px solid black",
});

export default function AccountInfo({ user, isOpen }) {
  return (
    <InfoWrapper $isVisible={isOpen}>
      <InfoTitle>Account</InfoTitle>
      <UserInfo>
        <UserAvatar
          customStyles={{ marginRight: "0.5rem" }}
          image={user.avatar}
        />
        <UserData>
          <UserName>
            {user.name} {user.surname}
          </UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserData>
      </UserInfo>
      <InfoSectionLast to="/settings">Settings</InfoSectionLast>
      <LogoutButton />
    </InfoWrapper>
  );
}
