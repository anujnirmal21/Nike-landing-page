import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className=" flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You <span className=" text-coral-red">Super</span>{" "}
          <span className=" text-coral-red">Quality</span> Shoes
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita
          sequi nulla cumque rerum voluptatum!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fuga.
        </p>
        <div className=" mt-11">
          <Button label="View details"></Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <img
          src={shoe8}
          alt={shoe8}
          height={522}
          width={570}
          className=" object-contain"
        />
      </div>
    </section>
  );
}
