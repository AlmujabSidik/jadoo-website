import MapsDestination from "images/map-destination.svg";
import Payment from "images/payment.svg";
import Car from "images/car.svg";
import Leaf from "images/leaf.svg";
import Maps from "images/maps.svg";
import Navigation from "images/send.svg";
import Building from "images/building.svg";
import Heart from "images/heart.svg";
import Image from "next/image";

export default function Next() {
  return (
    <div className="mb-28">
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-6/12 pl-8 pr-20">
            <div className="flex flex-col mb-16 ">
              <h3 className="mb-2 text-lg font-semibold text-gray-500 font-text-1">
                Easy and Fast
              </h3>
              <h3 className="mb-10 text-5xl leading-snug text-gray-900 font-text-2">
                Book your next trip in 3 easy steps
              </h3>
              <ul className="flex flex-col pr-10 gap-y-10">
                <li className="flex items-center">
                  <span className="flex items-center justify-center flex-none w-12 h-12 text-white bg-accent-1 rounded-xl">
                    <MapsDestination />
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="mb-1 font-bold text-gray-500 font-text-1">
                      Choose Destination
                    </h6>
                    <p className="font-normal text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center flex-none w-12 h-12 text-white bg-accent-2 rounded-xl">
                    <Payment />
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="mb-1 font-bold text-gray-500 font-text-1">
                      Make Payment
                    </h6>
                    <p className="font-normal text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center flex-none w-12 h-12 text-white bg-accent-8 rounded-xl">
                    <Car />
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="mb-1 font-bold text-gray-500 font-text-1">
                      Reach Airport on Selected Date
                    </h6>
                    <p className="font-normal text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-5/12 ">
            <div className="w-[370px] relative">
              <div className="absolute z-10 rounded-full w-60 h-60 blur-3xl -top-10 -right-10 bg-accent-8/40"></div>
              <div className="absolute bottom-16 right-0 transform translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7">
                <div className="flex">
                  <span className="flex-none w-12 h-12 mr-3 overflow-hidden rounded-full">
                    <Image
                      layout="responsive"
                      width={100}
                      height={100}
                      src="/images/destination5.jpg"
                      alt=""
                    />
                  </span>
                  <div className="flex flex-col w-full mb-2">
                    <span className="text-sm text-gray-500 font-text-1">
                      Ongoing
                    </span>
                    <h6 className="mb-2 text-lg font-medium text-gray-900 font-text-1">
                      Trip to Rome
                    </h6>
                    <p className="mb-1 text-sm font-medium text-gray-900 font-text-1">
                      <span className="text-accent-7">40%</span> completed
                    </p>
                    <span className="flex w-full h-1 overflow-hidden rounded-full bg-slate-100/80">
                      <span className="w-20 h-full rounded-full bg-accent-7"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-20 w-full h-full pt-4 pb-5 bg-white rounded-2xl shadow-great">
                <div className="relative h-40 mx-4 mb-6 overflow-hidden rounded-xl">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    width={100}
                    height={100}
                    src="/images/destination4.jpg"
                    alt=""
                  />
                </div>
                <h6 className="px-4 mb-2 text-lg font-medium text-gray-900 font-text-1">
                  Trip To Greece
                </h6>
                <div className="flex px-4 mb-2 text-gray-500">
                  <h6 className="">14-29 June</h6>
                  <span className="mx-2">|</span>
                  <h6>by Robbin Joseph</h6>
                </div>
                <div className="flex items-center px-4 mb-7 gap-x-4">
                  <div className="flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
                    <Leaf />
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
                    <Maps />
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
                    <Navigation />
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 mb-2">
                  <div className="flex items-center gap-x-4">
                    <Building />
                    <p className="text-base font-medium text-gray-500 font-text-1">
                      24 people going
                    </p>
                  </div>

                  <Heart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
