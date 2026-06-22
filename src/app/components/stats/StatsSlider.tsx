"use client";

import { useEffect, useState } from "react";
import { Users, BookOpen, MessageCircleMore } from "lucide-react";

export default function StatsSlider({ stats }: any) {
  const [activeStat, setActiveStat] = useState(0);

  /* =========================
     AUTO SLIDER LOGIC
  ========================= */
  useEffect(() => {
    if (!stats?.length) return;

    const interval = setInterval(() => {
      setActiveStat((prev) =>
        prev === stats.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, [stats?.length]);

  return (
    <div className="mt-8 overflow-hidden md:mt-10">

      <div className="relative h-[92px] md:h-[110px] overflow-hidden">

        {stats.map((item: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              activeStat === index
                ? "opacity-100 translate-y-0 blur-0 scale-100 z-10"
                : "opacity-0 translate-y-2 blur-sm scale-[0.98] pointer-events-none z-0"
            }`}
          >

            <div className="
              bg-white
              border
              border-gray-200
              rounded-3xl
              px-5
              py-4
              md:px-8
              md:py-6
              flex
              items-center
              justify-between
              shadow-sm
            ">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-black">

                  {item.type === "users" && (
                    <Users size={22} strokeWidth={2.2} />
                  )}

                  {item.type === "topics" && (
                    <BookOpen size={22} strokeWidth={2.2} />
                  )}

                  {item.type === "questions" && (
                    <MessageCircleMore size={22} strokeWidth={2.2} />
                  )}

                </div>

                <div className="h-[44px] flex flex-col justify-center">

                  <p className="text-[22px] font-bold text-black leading-none">
                    {item.value}
                  </p>

                  <div className="flex items-center gap-2 mt-1">

                    {/* glowing dot ONLY for active slide */}
                    {activeStat === index && (
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.9)] animate-pulse" />
                    )}

                    <p className="text-sm text-gray-600">
                      {item.text}
                    </p>

                  </div>

                </div>
              </div>

              {/* DOT NAV */}
              <div className="flex gap-1.5">

                {stats.map((_: any, dotIndex: number) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStat === dotIndex
                        ? "bg-black"
                        : "bg-gray-300"
                    }`}
                  />
                ))}

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}