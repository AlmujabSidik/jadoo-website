import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Category from "components/Category";
import TopSelling from "components/Selling";
import NextTrip from "components/Next";
import Testimonial from "components/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Traveling With Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Category />

      <TopSelling />

      <NextTrip />

      <Testimonial />
    </div>
  );
}
