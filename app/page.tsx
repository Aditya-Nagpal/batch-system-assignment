import React from "react";
import Header from "./components/Header";
import Front from "./components/Front";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Front />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
}
