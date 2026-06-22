"use client";

import { X } from "lucide-react";

export default function MmdPopup({
  show,
  setShow,
  selectedFunction,
  selectedClass,
}: any) {
  if (!show) return null;

  const regions = [
    "MUMBAI",
    "NOIDA",
    "KOLKATA",
    "CHENNAI",
    "KOCHI",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white w-full max-w-md rounded-3xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold">
            Select your MMD
          </h2>

          <button onClick={() => setShow(false)}>
            <X />
          </button>
        </div>

        {/* CONTEXT */}
        <p className="text-sm text-gray-500 mb-4">
          {selectedFunction?.title} • {selectedClass}
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-3">

          {regions.map((region, i) => (
            <button
              key={i}
              className="
                border
                rounded-2xl
                p-4
                text-sm
                font-bold
                hover:bg-black
                hover:text-white
                transition-all
              "
              onClick={() => {
                console.log("Selected:", region);
                setShow(false);
              }}
            >
              {region}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}