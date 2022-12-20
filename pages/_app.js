import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Layout } from "../Components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
