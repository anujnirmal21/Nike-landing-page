import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";

export default function CustomerReview() {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center font-bold text-4xl">
        What our <span className=" text-coral-red">Customers </span>
        Say?
      </h3>
      <p className=" info-text  m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
        perspiciatis nesciunt magnam.
      </p>
      <div className=" m-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}
