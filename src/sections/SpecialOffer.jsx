import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

export default function SpecialOffer() {
  return (
    <section className=" flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>

      <div className=" flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className=" text-coral-red">Special</span> Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita
          sequi nulla cumque rerum voluptatum!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A harum
          doloribus quod repudiandae veniam accusantium maiores mollitia dolorem
          molestias nesciunt.
        </p>
        <div className=" mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" URL={arrowRight}></Button>
        </div>
      </div>
    </section>
  );
}
