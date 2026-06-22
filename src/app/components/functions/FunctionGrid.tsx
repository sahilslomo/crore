"use client";

import Link from "next/link";
import { Folder } from "lucide-react";

export default function FunctionGrid({
  functions,
  selectedClass,
  setShowAuth,
}: any) {
  return (
    <div>
      <h2 className="text-sm font-bold text-gray-500 mb-4">
        BROWSE BY FUNCTION
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {functions.map((item: any, index: number) => (
          <Link
            key={index}
            href={`/topics/${selectedClass}/${item.code.toLowerCase()}`}
            onClick={(e) => {
              if (typeof window !== "undefined" && !localStorage.getItem("user")) {
                e.preventDefault();
                setShowAuth(true);
              }
            }}
            className="bg-white border rounded-2xl p-4 min-h-[180px]"
          >
            <div className="text-xs bg-black text-white px-3 py-1 rounded-lg w-fit mb-3">
              {item.code}
            </div>

            <Folder size={28} className="mb-3" />

            <h3 className="font-bold">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}