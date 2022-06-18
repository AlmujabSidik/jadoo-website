import Head from "next/head";
import Header from "components/Header";
import Image from "next/image";

import DecorHero from "images/decor-intersect-1.svg";
import DecorText from "images/text-decore.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Traveling With Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12  h-screen right-0 top-0 bottom-0">
          <DecorHero className="fill-accent-4" />
        </span>
        <div className="w-96 h-96 rounded-full bg-accent-3/30 blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-text-1 font-bold text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>
              <h2 className="text-accent-5 font-text-2 font-bold text-[84px] leading-[89px] tracking-tighter mb-8">
                Travel,{" "}
                <span className="relative">
                  enjoy
                  <span className="absolute top-20 -right-40 -z-10">
                    <DecorText className="w-[385px] h-[12px] fill-accent-2" />
                  </span>
                </span>{" "}
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-md leading-8 ">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
