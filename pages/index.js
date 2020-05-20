import Layout from "../components/Layout";
import Prices from "../components/Prices";

import fetch from "isomorphic-unfetch";

const Index = ({ bpi }) => (
  <Layout>
    <h1>Welcome to BitzPrice</h1>
    <p>Check current Bitcoin rate</p>
    <Prices bpi={bpi} />
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/BRL.json"
  );

  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
