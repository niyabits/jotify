import React from "react";
import InlineEdit from "@/components/InlineEdit";
import Layout from "@/components/Layout";
import { styled } from "@/stitches";
import type { NextPage } from "next";

const Container = styled("main", {
  maxWidth: "750px",
  margin: "auto",
});

const Home: NextPage = () => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Layout>
      <Container>
        <h1>Jotify</h1>
        <InlineEdit value={value} setValue={setValue} />
      </Container>
    </Layout>
  );
};

export default Home;
