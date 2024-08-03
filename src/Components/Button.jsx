import React from "react";

export default function Button({ label, URL, fullwidth }) {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-full ${
          fullwidth && "w-full"
        }`}
      >
        {label}
        {URL && (
          <img
            src={URL}
            alt="arrowRight"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </div>
  );
}
