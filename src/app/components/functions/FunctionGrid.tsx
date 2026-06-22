"use client";

import Link from "next/link";
import { Folder } from "lucide-react";

export default function FunctionGrid({
  functions,
  selectedClass,
  auth,
  setShowAuth,
}: any) {
  return (
    <div>
      {/* TITLE */}
      <h2 className="text-sm font-bold tracking-[2px] text-gray-500 mb-4">
        BROWSE BY FUNCTION
      </h2>

      {/* GRID (KEEP SAME STRUCTURE AS YOUR FIRST PAGE STYLE) */}
      <div className="grid grid-cols-2 gap-4">
        {functions.map((item: any, index: number) => (
          <Link
            key={index}
            href={`/topics/${selectedClass}/${item.code.toLowerCase()}`}
            prefetch={false}
            onClick={(e) => {
              if (!auth?.currentUser) {
                e.preventDefault();
                setShowAuth(true);
              }
            }}
            className="
              bg-white border border-gray-200 rounded-2xl

              p-4
              min-h-[160px]

              flex flex-col items-center justify-center text-center gap-2

              transition-all duration-150

              hover:shadow-md hover:-translate-y-1 hover:border-black

              active:scale-95 active:shadow-inner active:translate-y-[2px]
            "
          >
            {/* CODE BADGE */}
            <div className="text-[10px] bg-black text-white px-2 py-1 rounded-md">
              {item.code}
            </div>

            {/* ICON */}
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <Folder
                size={32}
                className="md:w-10 md:h-10 lg:w-8 lg:h-8"
                strokeWidth={1.8}
              />
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-sm">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-[11px] text-gray-500 leading-tight">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}