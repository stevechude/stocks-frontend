import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Stocks App</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
