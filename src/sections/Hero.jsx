import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";

export default function Hero() {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 xl:flex-row"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 max-lg:z-0 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita
          sequi nulla cumque rerum voluptatum!
        </p>
        <Button label="Shop Now" URL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => {
            return (
              <div key={item.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {item.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min--screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="shoe image"
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((item, idx) => {
            return (
              <div key={idx}>
                <ShoeCard
                  imgUrl={item}
                  nextShoe={(shoe) => setBigShoe(shoe)}
                  bigShoeImg={bigShoe}
                ></ShoeCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
