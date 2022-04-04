import Ecom from "../components/Ecom";
import EnterpriseScale from "../components/EnterpriseScale";
import GetStarted from "../components/GetStarted";
import GrowingBusiness from "../components/GrowingBusiness";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Logos from "../components/Logos";
import Map from "../components/Map";
import Startups from "../components/Startups";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Ecom />
      <Startups />
      <GrowingBusiness />
      <EnterpriseScale />
      <Logos />
      <Map />
      <GetStarted />
    </Layout>
  );
};

export default Home;
