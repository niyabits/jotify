import InlineEdit from "@/components/InlineEdit";
import Layout from "@/components/Layout";
import { styled } from "@/stitches";
import React from "react";

const Container = styled("main", {
  maxWidth: "750px",
  margin: "auto",
});

export type Block = {
  type: string;
  text: string;
};

const Home = () => {
  const blockContainerRef = React.useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = React.useState<Block[]>([
    {
      type: "h1",
      text: "",
    },
  ]);

  React.useEffect(() => {
    if (blockContainerRef.current !== null) {
      (
        blockContainerRef?.current?.lastChild?.firstChild as HTMLElement
      ).focus();
    }
  }, [blocks.length]);

  return (
    <Layout>
      <Container>
        <div ref={blockContainerRef}>
          {blocks.map((_, index) => {
            return (
              <InlineEdit
                identifier={index}
                key={index}
                blocks={blocks}
                setBlocks={setBlocks}
              />
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
