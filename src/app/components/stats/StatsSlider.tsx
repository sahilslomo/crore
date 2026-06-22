"use client";

import {
  Users,
  BookOpen,
  MessageCircleMore,
} from "lucide-react";

export default function StatsSlider({
  stats,
  activeStat,
}: any) {
  return (
    <div className="mt-8 relative h-[100px]">
      {stats.map((item: any, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all ${
            activeStat === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="bg-white border rounded-3xl p-5 flex justify-between">
            <div className="flex items-center gap-4">

              {item.type === "users" && (
                <Users />
              )}
              {item.type === "topics" && (
                <BookOpen />
              )}
              {item.type === "questions" && (
                <MessageCircleMore />
              )}

              <div>
                <p className="text-xl font-bold">
                  {item.value}
                </p>
                <p className="text-sm text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}