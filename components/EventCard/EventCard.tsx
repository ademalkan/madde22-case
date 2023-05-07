import Event from "@/store/interfaces/Event";
import Image from "next/image";
import React from "react";

function EventCard({ event }: { event: Event }) {
  const { title, date, description, image } = event;

  const eventDate = new Date(date);

  const formattedDate = eventDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="product-card flex rounded-sm shadow-2xl border-1 overflow-hidden md:flex-row flex-col  md:w-4/5 mt-4">
      <div className="bg-black md:w-2/6 w-full  max-sm:h-40  relative">
        <div className="md:text-pink text-sm md:w-1 md:top-16 md:left-14 left-32  top-1 text-white absolute md:flex-col  flex  items-center text-center">
          <span className="md:font-normal md:mr-0 md-text-md md:text-sm font-bold mr-2 text-lg">
            {formattedDate}
          </span>{" "}
        </div>
      </div>
      <div className="md:w-1/2 p-5 md:-ms-32 md:-mt-0 -mt-36 relative md:mt-0">
        <div className="text-white bg-blue-500 w-fit px-8 -ms-6 absolute md:top-8 -top-3  ">
          {title}
        </div>
        <Image
          src={image}
          alt="Product Image"
          className="object-cover w-full h-40"
          crossOrigin="anonymous"
        />
      </div>
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <h6 className="text-sm text-gray-400 mb-2 hidden md:flex">
          {formattedDate}
        </h6>
        <p className="text-gray-600 mb-4 text-wrap  ">{description}</p>
      </div>
      <div className="md:w-1/5 w-full px-3 mb-2 md:mb-0 flex md:items-start items-center justify-center md:flex-col">
        <button className="w-full   bg-pink text-white py-2 px-4 font-bold-md hover:bg-white   hover:text-pink transition-colors duration-300">
          Bilet Al
        </button>
        <button className="w-full mt-2 text-xs py-2 px-4 rounded-md hover:bg-white  hover:text-pink transition-colors duration-300">
          Takvime Ekle
        </button>
      </div>
    </div>
  );
}

export default EventCard;
