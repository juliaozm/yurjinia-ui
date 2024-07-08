import React from "react";
import styled from "styled-components";

const Avatar = styled.button((props) => ({
  width: "45px",
  height: "45px",
  backgroundSize: "contain",
  borderRadius: "50%",
  border: "1px solid white",
  backgroundImage: `url(${props.$img})`,
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
  cursor: "pointer",
  ...props.$customStyles,

  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
}));

export default function UserAvatar({ customStyles, image, handleOnClick }) {
  return (
    <Avatar $img={image} $customStyles={customStyles} onClick={handleOnClick} />
  );
}
