import Head from "next/head";
import { Fragment } from "react";
import {
  Header,
  Features,
  Support,
  Pricing,
  SupportTwo,
  Testimonials,
  Partners,
  Blog,
  Faq,
  Footer,
} from "../sections";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next Creative Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        <Features />
        <Support />
        <Pricing />
        <SupportTwo />
        <Testimonials />
        <Partners />
        <Blog />
        <Faq />
        <Footer />
      </div>
    </Fragment>
  );
}
