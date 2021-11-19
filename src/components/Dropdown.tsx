import { styled } from "@/stitches";
import type * as Stitches from "@stitches/react";
import React from "react";
import type { Block } from "../pages/index";

const Container = styled("div", {
  display: "inline-flex",
  flexDirection: "column",
  background: "white",
  zIndex: "1",

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

const Dropdown = ({
  css,
  id,
  identifier,
  setBlocks,
  blocks,
  setDropDownVisible,
}: {
  css: Stitches.CSS;
  id: string;
  identifier: number;
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  blocks: Block[];
  setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const selectEvent = (type: string) => {
    const newBlocks = [...blocks];
    const currBlockText = blocks[identifier].text;

    // Remove / from the end of the text
    newBlocks[identifier].text =
      currBlockText.substr(currBlockText.length - 1) === "/"
        ? currBlockText.slice(0, -1)
        : currBlockText;

    setDropDownVisible(false);

    // TODO: Currently the block is pushed at the end of the array, but it should be pushed next to the current block
    const newBlock = {
      type,
      text: "",
    };
    newBlocks.push(newBlock);

    setBlocks(newBlocks);
  };

  const handleH1Click = () => selectEvent("h1");
  const handleH2Click = () => selectEvent("h2");
  const handleParaClick = () => selectEvent("p");

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    type: string
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      selectEvent(type);
    }
  };

  const handleH1KeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleKeyDown(event, "h1");
  const handleH2KeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleKeyDown(event, "h2");
  const handleParaKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleKeyDown(event, "p");

  return (
    <Container id={id} css={css}>
      <p>Blocks</p>
      <div id="options">
        <div tabIndex={0} onClick={handleH1Click} onKeyDown={handleH1KeyDown}>
          Heading 1
        </div>
        <div tabIndex={0} onClick={handleH2Click} onKeyDown={handleH2KeyDown}>
          Heading 2
        </div>
        <div
          tabIndex={0}
          onClick={handleParaClick}
          onKeyDown={handleParaKeyDown}
        >
          Text
        </div>
      </div>
    </Container>
  );
};

export default Dropdown;
