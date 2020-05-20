import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/lux/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
