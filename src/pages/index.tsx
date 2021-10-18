import Layout from "@/components/Layout";
import { styled } from "@/stitches";
import type { NextPage } from "next";

const Container = styled("main", {
  maxWidth: "750px",
  margin: "auto",
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Jotion</h1>
        <input value="Text Value" />
      </Container>
    </Layout>
  );
};

export default Home;
