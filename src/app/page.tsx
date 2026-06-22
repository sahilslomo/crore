"use client";

import { useState, useEffect } from "react";

import Header from "@/app/components/header/Header";
import ClassDropdown from "@/app/components/class/ClassDropdown";
import FunctionGrid from "@/app/components/functions/FunctionGrid";
import BrowseTabs from "@/app/components/browse/BrowseTabs";
import StatsSlider from "@/app/components/stats/StatsSlider";
import BottomNav from "@/app/components/navbar/BottomNav";
import AuthModal from "@/app/components/auth/AuthModal";

/* keep your existing firebase + logic here unchanged */

export default function HomePage() {
  const [selectedClass, setSelectedClass] = useState("class2");
  const [showAuth, setShowAuth] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

  const functions = [
    { code: "FN3", title: "SAFETY", desc: "IMO, MLC, UNCLOS, ETC" },
    { code: "FN4B", title: "MOTOR", desc: "PISTON, LINER, ETC" },
    { code: "FN5", title: "ELECTRICAL", desc: "EARTH FAULT, ICCP, ETC" },
    { code: "FN6", title: "MEP", desc: "MAC, STP, FWG, ETC" },
  ];

  const stats = [
    { type: "users", value: "0", text: "users online Today" },
    { type: "topics", value: "0", text: "topics viewed Today" },
    { type: "questions", value: "0", text: "questions viewed Today" },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f5] pb-[120px]">
        <div className="max-w-7xl mx-auto px-5 pt-5">

          <Header setShowAuth={setShowAuth} />
          <ClassDropdown
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />

          <FunctionGrid
            functions={functions}
            selectedClass={selectedClass}
            setShowAuth={setShowAuth}
          />

          {/* NEW TAB */}
          <BrowseTabs />

          <StatsSlider
            stats={stats}
            activeStat={activeStat}
          />

        </div>
      </main>

      <BottomNav />

      <AuthModal
        showAuth={showAuth}
        setShowAuth={setShowAuth}
      />
    </>
  );
}