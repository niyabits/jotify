import { styled } from "@/stitches";
import React from "react";
import globalStyles from "../styles/global.styles";

const Container = styled("div", {
  marginTop: "5rem",
  margin: "5rem $5",
});

const Layout: React.FC = ({ children }) => {
  globalStyles();
  return <Container>{children}</Container>;
};

export default Layout;
