"use client";

import { Folder } from "lucide-react";

export default function FunctionGrid({
  functions,
  user,
  setShowAuth,
  setShowMmd,
  setSelectedFunction,
}: any) {
  return (
    <div>
      {/* TITLE */}
      <h2 className="text-sm font-bold text-gray-500 mb-4">
        BROWSE BY FUNCTION
      </h2>

      {/* GRID: 2 COLUMNS */}
      <div className="grid grid-cols-2 gap-4">

        {functions.map((item: any, index: number) => (
          <button
            key={index}
            onClick={() => {
              if (!user) {
                setShowAuth(true);
                return;
              }

              setSelectedFunction(item);
              setShowMmd(true);
            }}
            className="
              bg-white border rounded-2xl
              p-4
              min-h-[160px]

              flex flex-col items-center justify-center gap-2

              hover:shadow-md hover:border-black
              active:scale-95
              transition-all
            "
          >
            {/* ICON BOX (same as tabs) */}
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <Folder size={18} />
            </div>

            {/* CODE */}
            <div className="text-[10px] bg-black text-white px-2 py-1 rounded-md">
              {item.code}
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-sm text-center">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[11px] text-gray-500 text-center leading-tight">
              {item.desc}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}