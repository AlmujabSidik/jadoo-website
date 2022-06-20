import react, { useState, useRef, useCallback } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  {
    id: "1",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "julian.jpg",
    author: "Mike Taylor",
    role: "Lahore, Pakistan",
  },
  {
    id: "2",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "tezos.jpg",
    author: "James Dome",
    role: "New York, USA",
  },
  {
    id: "1",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "vince.jpg",
    author: "Vladimir Staffon",
    role: "Moskow, Rusia",
  },
];

export default function Testimonial() {
  const [realSlide, setRealSlide] = useState(0);
  const swiper = useRef();

  const fnPrev = useCallback(() => {
    if (realSlide > 0) swiper?.current?.slidePrev();
  }, [swiper, realSlide]);

  const fnNext = useCallback(() => {
    if (realSlide < items.length) swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  return (
    <div className="mb-28">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-6/12 pl-8 pr-20">
            <div className="flex flex-col mb-16 ">
              <h3 className="mb-2 text-lg font-semibold text-gray-500 font-text-1">
                Testimonials
              </h3>
              <h3 className="mb-10 text-5xl leading-snug text-gray-900 font-text-2">
                What people say about Us.
              </h3>

              <ul className="flex gap-x-6">
                {items.map((item, i) => {
                  return (
                    <li
                      key={item.id}
                      className={[
                        `w-2 h-2 rounded-full`,
                        i === realSlide ? "bg-gray-800" : "bg-gray-300",
                      ].join(" ")}
                      onClick={() =>
                        i !== realSlide && swiper?.current?.slideTo(i)
                      }
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-6/12">
            <div className="absolute -inset-10 -top-20">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCreative,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ["-100%", "-100%", 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(s) => setRealSlide(s.realIndex)}
                onSwiper={(ss) => {
                  swiper.current = ss;
                }}
              >
                {items.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="relative px-32 pt-20 pb-48">
                        <div className="relative">
                          <div className="relative z-20 p-6 bg-white shadow-great rounded-xl">
                            <span className="absolute top-0 left-0 flex-none w-12 h-12 mr-3 overflow-hidden -translate-x-1/2 -translate-y-1/2 rounded-full transfrom">
                              <Image
                                objectFit="cover"
                                layout="responsive"
                                width={100}
                                height={100}
                                src={`/images/${item.image}`}
                                alt=""
                              />
                            </span>
                            <p className="mb-8 text-gray-500 ">{item.desc}</p>

                            <h6 className="text-lg text-gray-900">
                              {item.author}
                            </h6>
                            <h6 className="text-sm text-gray-500">
                              {item.role}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="flex items-center justify-center w-1/12">
            <div className="flex flex-col">
              <button
                className={[
                  realSlide === 0 ? "text-gray-300 " : "text-gray-800",
                ].join(" ")}
                onClick={fnPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <button
                className={[
                  realSlide === items.length - 1
                    ? "text-gray-300 "
                    : "text-gray-800",
                ].join(" ")}
                onClick={fnNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
</svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
