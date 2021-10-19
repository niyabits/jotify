import React from "react";
import { styled } from "@/stitches";
import Dropdown from "./Dropdown";

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
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InlineEdit = ({ value, setValue }: Props) => {
  const [editingValue, setEditingValue] = React.useState(value);
  const [dropDownVisible, setDropDownVisible] = React.useState<boolean>(false);

  const onInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    if (target.scrollHeight > 33) {
      target.style.height = "16px";
      target.style.height = target.scrollHeight + "px";
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingValue(event.target.value);

    setDropDownVisible(false);

    if (event.target.value === "/") {
      setDropDownVisible(true);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") {
      (event.target as HTMLTextAreaElement).blur();
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <textarea
        rows={1}
        aria-label="Notes"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onInput={onInput}
        placeholder="Press  /  for options or start typing..."
      />
      <Dropdown css={{ display: dropDownVisible ? "block" : "none" }} />
    </Container>
  );
};

export default InlineEdit;
