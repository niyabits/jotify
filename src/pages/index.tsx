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

const Home = React.forwardRef(() => {
  const [blocks, setBlocks] = React.useState<Block[]>([
    {
      type: "h1",
      text: "",
    },
  ]);

  return (
    <Layout>
      <Container>
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
      </Container>
    </Layout>
  );
});

Home.displayName = "Home";

export default Home;
