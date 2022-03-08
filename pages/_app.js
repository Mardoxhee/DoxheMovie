import "../styles/globals.css";
import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  switch (Component.name) {
    case "Landing":
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      );
  }
}

export default MyApp;
