import React from "react";
import { styled } from "@/stitches";

const Container = styled("span", {
  textarea: {
    width: "100%",
    backgroundColor: "transparent",
    padding: "$2",
    resize: "none",
    overflow: "hidden",
    minHeight: "$4",
    maxHeight: "$9",

    "&:hover": {
      backgroundColor: "#d3d3d3",
      cursor: "pointer",
    },

    "&:focus": {
      outline: "5px auto Highlight",
    },
  },
});

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InlineEdit = ({ value, setValue }: Props) => {
  const [editingValue, setEditingValue] = React.useState(value);

  const onInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    if (target.scrollHeight > 33) {
      target.style.height = "16px";
      target.style.height = target.scrollHeight + "px";
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setEditingValue(event.target.value);

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
        placeholder="Start typing..."
      />
    </Container>
  );
};

export default InlineEdit;
