import DecorHero from "images/decor-intersect-1.svg";
import DecorText from "images/text-decore.svg";
import Play from "images/play.svg";
import Image from "next/image";

import Link from "next/link";

export default function Hero() {
  
  return (
    <section className="relative mb-28">
      <span className="absolute top-0 bottom-0 right-0 w-5/12 h-screen">
        <DecorHero className="fill-accent-4" />
      </span>
      <div className="absolute rounded-full w-96 h-96 bg-accent-3/30 blur-3xl -left-80 -top-10"></div>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-6/12 pt-52">
            <h1 className="mb-6 text-xl font-bold uppercase text-accent-2 font-text-1">
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
            <p className="max-w-md mb-8 leading-8 text-gray-500">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex">
              <Link href="/">
                <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl hover:shadow-none transition duration-300 ease-in-out">
                  Find out more
                </a>
              </Link>

              <button className="flex items-center">
                <span className="inline-flex items-center justify-center mr-6 text-white bg-accent-2 px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                  <Play />
                </span>
                <p className="text-gray-500 font-text-1">Play Demo</p>
              </button>
            </div>
          </div>

          <div className="relative w-6/12 pt-24">
            <div className="absolute w-[137px] h-[95px] top-40 left-28 z-30">
              <Image layout="responsive" width={100} height={100} src="/images/plane.png" alt="decor plane"/>
            </div>
            <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
              <Image layout="responsive" width={100} height={100} src="/images/plane.png" alt="decor plane"/>
            </div>
            <div className="relative z-10 transform -translate-x-16">
              <Image priority layout="responsive" width={100} height={100} src="/images/hero-traveler.png" alt="Hero traveler"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
