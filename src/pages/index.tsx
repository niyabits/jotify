import InlineEdit from "@/components/InlineEdit";
import Layout from "@/components/Layout";
import { styled } from "@/stitches";
import type { NextPage } from "next";
import React from "react";

const Container = styled("main", {
  maxWidth: "750px",
  margin: "auto",
});

export type Block = {
  type: string;
  text: string;
};

const Home: NextPage = () => {
  const [blocks, setBlocks] = React.useState<Block[]>([
    {
      type: "h1",
      text: "",
    },
  ]);

  return (
    <Layout>
      <Container>
        {blocks.map((_, index) => (
          <InlineEdit
            identifier={index}
            key={index}
            value={blocks}
            setValue={setBlocks}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Home;
