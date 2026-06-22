"use client";

import { useRouter } from "next/navigation";
import {
  Anchor,
  Settings,
  Globe,
  Layers,
  Zap,
  Ship,
} from "lucide-react";

const tabs = [
  { name: "MOTOR", icon: Anchor, route: "/motor" },
  { name: "MEP", icon: Settings, route: "/mep" },
  { name: "GENERAL", icon: Globe, route: "/general" },
  { name: "SSEP", icon: Layers, route: "/ssep" },
  { name: "ELECTRICAL", icon: Zap, route: "/electrical" },
  { name: "NAVAL", icon: Ship, route: "/naval" },
];

export default function BrowseTabs() {
  const router = useRouter();

  return (
    <div className="mt-10">

      {/* TITLE */}
      <h2 className="text-sm font-bold text-gray-500 mb-4">
        BROWSE BY WRITTEN
      </h2>

      {/* GRID: SAME AS FUNCTION GRID */}
      <div className="grid grid-cols-2 gap-4">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.name}
              onClick={() => router.push(tab.route)}
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
              {/* ICON BOX */}
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                <Icon size={18} />
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-sm text-center">
                {tab.name}
              </h3>

              {/* OPTIONAL LABEL (kept minimal for consistency) */}
              <p className="text-[11px] text-gray-500 text-center">
                Open section
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}