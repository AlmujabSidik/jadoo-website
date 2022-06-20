import DecorPlus from "images/decor-plus-style-1.svg";
import Image from "next/image";

const Category = () => {
  return (
    <section className="relative mb-32">
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="absolute w-36 h-36 lg:-right-10 -top-10">
          <DecorPlus className="decor-plus-style-1" />
        </div>
        <div className="flex flex-col mb-16 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-500 font-text-1">
            Category
          </h3>
          <h3 className="text-5xl leading-snug text-gray-900 font-text-2">
            We Offer Best Services
          </h3>
        </div>
        <div className="flex text-gray-900">
          {/* Card 1 */}
          <div className="w-3/12 px-8 ">
            <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 transform -translate-x-1/2 translate-y-1/2 rounded-br-lg opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 bg-accent-2 rounded-tl-3xl w-28 h-28"></div>
              <div className="relative inline-flex mb-6 h-28">
                <div className="absolute z-10 transform -translate-x-1/2 translate-y-1/2 -right-11">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/img-satelite.png"
                    alt="Card Image Satelite"
                  />
                </div>
                <div className="absolute bottom-0 w-12 h-12 duration-300 transform -translate-x-1/2 rounded-tl-lg left-5 bg-accent-4 rounded-tr-md rounded-bl-md rounded-br-2xl group-hover:-translate-y-1/2"></div>
              </div>
              <h4 className="mb-3 text-xl">Calculated Weather</h4>
              <h5 className="px-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
              </h5>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-3/12 px-8 ">
            <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 transform -translate-x-1/2 translate-y-1/2 rounded-br-lg opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 bg-accent-2 rounded-tl-3xl w-28 h-28"></div>
              <div className="relative inline-flex mb-6 h-28">
                <div className="absolute z-10 transform -translate-x-1/2 ">
                  <Image
                    layout="fixed"
                    width={146}
                    height={133}
                    src="/images/plane.png"
                    alt="Card Image Plane"
                  />
                </div>
                <div className="absolute w-12 h-12 duration-300 transform -translate-x-1/2 rounded-br-lg bottom-8 -right-9 rounded-tl-md bg-accent-4 rounded-tr-md rounded-bl-2xl group-hover:translate-y-1/2"></div>
              </div>
              <h4 className="mb-3 text-xl">Best Flights</h4>
              <h5 className="px-8 mb-8">
                Engrossed listening. Park gate sell they west hard for the.
              </h5>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-3/12 px-8 ">
            <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 transform -translate-x-1/2 translate-y-1/2 rounded-br-lg opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 bg-accent-2 rounded-tl-3xl w-28 h-28"></div>
              <div className="relative inline-flex mb-6 h-28">
                <div className="absolute z-10 transform -translate-x-1/2 translate-y-1/2 -right-11">
                  <Image
                    layout="fixed"
                    width={40}
                    height={69}
                    src="/images/img-karaoke.png"
                    alt="Card Image Karaoke"
                  />
                </div>
                <div className="absolute w-12 h-12 duration-300 transform -translate-x-1/2 rounded-bl-lg bottom-8 rounded-br-md rounded-tl-md left-5 bg-accent-4 rounded-tr-3xl group-hover:translate-y-1/2"></div>
              </div>
              <h4 className="mb-3 text-xl">Local Events</h4>
              <h5 className="px-8 mb-8">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </h5>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-3/12 px-8 ">
            <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 transform -translate-x-1/2 translate-y-1/2 rounded-br-lg opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 bg-accent-2 rounded-tl-3xl w-28 h-28"></div>
              <div className="relative inline-flex mb-6 h-28">
                <div className="absolute z-10 transform -translate-x-1/2 translate-y-1/2 -right-11">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src="/images/img-gear.png"
                    alt="Card Image Gear"
                  />
                </div>
                <div className="absolute bottom-0 w-12 h-12 duration-300 transform -translate-x-1/2 rounded-tr-lg rounded-tl-md left-5 bg-accent-4 rounded-bl-3xl rounded-br-md group-hover:-translate-y-1/2"></div>
              </div>
              <h4 className="mb-3 text-xl">Customization</h4>
              <h5 className="px-8 mb-8">
                We deliver outsourced aviation services for military customers
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
