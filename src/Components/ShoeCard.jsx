import React from "react";

export default function ShoeCard({ imgUrl, nextShoe, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      nextShoe(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="img"
          width={127}
          height={103}
          className="objext-contain"
        />
      </div>
    </div>
  );
}
