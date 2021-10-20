import { styled } from "@/stitches";
import React from "react";

const Container = styled("div", {
  display: "inline-flex",
  flexDirection: "column",

  position: "absolute",
  left: "0",
  top: "$5",

  padding: "$4 0 $4 0",
  marginTop: "$2",

  border: "1px solid hsl(0,0%,0%,0.1)",
  borderRadius: "$2",

  p: {
    color: "Gray",
    fontSize: "$3",
    marginLeft: "calc($4 + $1)",
    marginBottom: "$1",
  },

  "#options": {
    margin: "$1",

    div: {
      cursor: "pointer",
      padding: "$3 $7 $3 $4",
      borderRadius: "$1",

      "&:hover, &:focus": {
        background: "PeachPuff",
        outline: "none",
      },
    },
  },
});

const Dropdown: React.FC = (props) => {
  return (
    <Container {...props}>
      <p>Blocks</p>
      <div id="options">
        <div tabIndex={0}>Heading 1</div>
        <div tabIndex={0}>Heading 2</div>
        <div tabIndex={0}>Text</div>
      </div>
    </Container>
  );
};

export default Dropdown;
