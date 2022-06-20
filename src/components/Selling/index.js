import DecorSwiral1 from "images/Decore-swirl-1.svg";
import NavigationCard from "images/navigation-card.svg";
import Image from "next/image";

export default function Selling() {
  return (
    <section className="relative mb-32">
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="flex flex-col mb-16 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-500 font-text-1">
            Top Selling
          </h3>
          <h3 className="text-5xl leading-snug text-gray-900 font-text-2">
            Top Destinations
          </h3>
        </div>
        <div className="relative flex pr-10">
          <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
            <DecorSwiral1 className="stroke-gray-500" />
          </div>

          <div className="relative z-20 w-4/12 px-6">
            <div className="flex flex-col pb-8 bg-white rounded-3xl shadow-great">
              <div className="relative overflow-hidden rounded-tr-3xl rounded-tl-3xl h-96">
                <Image
                  className="object-cover"
                  layout="fill"
                  src="/images/destination1.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-500 rounded-tr-3xl rounded-tl-3xl">
                <div className="flex justify-between px-5 pt-7">
                  <h6 className="text-lg">Rome, Italy</h6>
                  <h6 className="text-lg">$5,42k</h6>
                </div>
                <div className="flex items-center px-5 pt-4">
                  <NavigationCard />
                  <h6 className="pl-4">10 Days Trip</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 w-4/12 px-6">
            <div className="flex flex-col pb-8 bg-white rounded-3xl shadow-great">
              <div className="relative overflow-hidden rounded-tr-3xl rounded-tl-3xl h-96">
                <Image
                  className="object-cover"
                  layout="fill"
                  src="/images/destination2.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-500 rounded-tr-3xl rounded-tl-3xl">
                <div className="flex justify-between px-5 pt-7">
                  <h6 className="text-lg">London, UK</h6>
                  <h6 className="text-lg">$4,2k</h6>
                </div>
                <div className="flex items-center px-5 pt-4">
                  <NavigationCard />
                  <h6 className="pl-4">12 Days Trip</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 w-4/12 px-6">
            <div className="flex flex-col pb-8 bg-white rounded-3xl shadow-great">
              <div className="relative overflow-hidden rounded-tr-3xl rounded-tl-3xl h-96">
                <Image
                  className="object-cover"
                  layout="fill"
                  src="/images/destination3.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-500 rounded-tr-3xl rounded-tl-3xl">
                <div className="flex justify-between px-5 pt-7">
                  <h6 className="text-lg">Full Europe</h6>
                  <h6 className="text-lg">$15k</h6>
                </div>
                <div className="flex items-center px-5 pt-4">
                  <NavigationCard />
                  <h6 className="pl-4">28 Days Trip</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
