import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";

function Carousel({ data }) {
  const [activeButton, setActiveButton] = useState("button1");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    Autoplay({ delay: 1000 }),
  ]);

  // Prev and Next button functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setActiveButton("button1");
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setActiveButton("button2");
  }, [emblaApi]);

  return (
    <div
      className="overflow-hidden max-w-[650px] h-max mx-auto flex flex-col items-center justify-center relative rounded-2xl"
      ref={emblaRef}
    >
      {/* Images */}
      <div className="flex flex-col w-[650px] h-[486.5px]">
        {data.map((item) => {
          return (
            <div key={item.id} className="embla__slide relative h-full w-full ">
              <img
                className="w-[450px] h-auto my-5 mx-auto scale-110"
                src={item.src}
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
      {/* Buttons */}
      <div className="mt-10 flex flex-col absolute right-0 gap-4">
        <button
          className={`px-2 py-2 rounded-full ${
            activeButton === "button1" ? "bg-[#F2AA4C]" : "bg-[#F6D6AD]"
          }`}
          onClick={scrollPrev}
        ></button>
        <button
          className={`px-2 py-2 rounded-full ${
            activeButton === "button1" ? "bg-[#F6D6AD]" : "bg-[#F2AA4C]"
          }`}
          onClick={scrollNext}
        ></button>
      </div>
    </div>
  );
}

export default Carousel;
