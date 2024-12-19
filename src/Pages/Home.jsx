import Category from "../components/Home/Category";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";

function Home() {
  return (
    <Layout>
      <Hero />
      <Category />
      {/* <Services /> */}
    </Layout>
  );
}

export default Home;
