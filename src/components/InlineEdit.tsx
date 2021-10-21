import { styled } from "@/stitches";
import React from "react";
import type { Block } from "../pages/index";
import Dropdown from "@/components/Dropdown";

const Container = styled("span", {
  position: "relative",

  textarea: {
    width: "100%",
    backgroundColor: "transparent",
    padding: "$2 $3",
    resize: "none",
    overflow: "hidden",
    minHeight: "$4",
    maxHeight: "$9",
    borderRadius: "$1",
    transition: "background-color 0.1s ease-in",

    "&::placeholder": {
      paddingLeft: "2px",
    },

    "&:hover": {
      backgroundColor: "#f8f8f8",
      transition: "background-color 0.2s ease-out",
      cursor: "pointer",
    },

    "&:focus": {
      outline: "hsl(250,95%,97%) solid 1px",
      border: "none",
    },
  },
});

type Props = {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  identifier: number;
};

const InlineEdit = ({ blocks, setBlocks, identifier }: Props) => {
  const [dropDownVisible, setDropDownVisible] = React.useState<boolean>(false);

  const onInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    if (target.scrollHeight > 33) {
      target.style.height = "16px";
      target.style.height = target.scrollHeight + "px";
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBlocks = [...blocks];
    newBlocks[identifier].text = event.target.value;
    setBlocks(newBlocks);

    setDropDownVisible(false);

    if (event.target.value.includes("/")) {
      setDropDownVisible(true);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") {
      (event.target as HTMLTextAreaElement).blur();
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    const newBlock = [...blocks];
    newBlock[identifier].text = event.target.value;

    setBlocks(newBlock);
  };

  return (
    <Container>
      <textarea
        rows={1}
        aria-label="Notes"
        value={blocks[identifier].text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onInput={onInput}
        placeholder="Press  /  for options or start typing..."
      />
      <Dropdown
        id="dropdown"
        css={{ display: dropDownVisible ? "block" : "none" }}
        setBlocks={setBlocks}
        blocks={blocks}
        setDropDownVisible={setDropDownVisible}
        identifier={identifier}
      />
    </Container>
  );
};

export default InlineEdit;
