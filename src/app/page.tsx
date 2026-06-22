"use client";

import { useState, useEffect } from "react";

import Header from "@/app/components/header/Header";
import ClassDropdown from "@/app/components/class/ClassDropdown";
import FunctionGrid from "@/app/components/functions/FunctionGrid";
import BrowseTabs from "@/app/components/browse/BrowseTabs";
import StatsSlider from "@/app/components/stats/StatsSlider";
import BottomNav from "@/app/components/navbar/BottomNav";
import AuthModal from "@/app/components/auth/AuthModal";
import MmdPopup from "@/app/components/mmd/MmdPopup";

import { auth } from "@/app/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function HomePage() {
  /* =========================
     STATE
  ========================= */
  const [user, setUser] = useState<any>(null);

  const [selectedClass, setSelectedClass] = useState("class2");

  const [showAuth, setShowAuth] = useState(false);

  const [showMmd, setShowMmd] = useState(false);

  const [selectedFunction, setSelectedFunction] = useState<any>(null);

  const [activeStat, setActiveStat] = useState(0);

  /* =========================
     FIREBASE AUTH LISTENER
  ========================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  /* =========================
     AUTO STATS SLIDER
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     FUNCTIONS DATA
  ========================= */
  const functions = [
    { code: "FN3", title: "SAFETY", desc: "IMO, UNCLOS, ETC" },
    { code: "FN4B", title: "MOTOR", desc: "PISTON, LINER, ETC" },
    { code: "FN5", title: "ELECTRICAL", desc: "MOTOR, ICCP, ETC" },
    { code: "FN6", title: "MEP", desc: "MAC, STP, FWG, ETC" },
  ];

  /* =========================
     STATS DATA
  ========================= */
  const stats = [
    { type: "users", value: "0", text: "users online Today" },
    { type: "topics", value: "0", text: "topics viewed Today" },
    { type: "questions", value: "0", text: "questions viewed Today" },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f5] pb-[120px]">
        <div className="max-w-7xl mx-auto px-5 pt-5">

          {/* ================= HEADER ================= */}
          <Header
            user={user}
            setShowAuth={setShowAuth}
          />

          {/* ================= CLASS SELECT ================= */}
          <div className="mt-4 md:mt-6">
            <ClassDropdown
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
            />
          </div>

          {/* ================= FUNCTION GRID ================= */}
          <FunctionGrid
            functions={functions}
            selectedClass={selectedClass}
            user={user}
            setShowAuth={setShowAuth}
            setShowMmd={setShowMmd}
            setSelectedFunction={setSelectedFunction}
          />

          {/* ================= MMD POPUP ================= */}
          <MmdPopup
            show={showMmd}
            setShow={setShowMmd}
            selectedFunction={selectedFunction}
            selectedClass={selectedClass}
          />

          {/* ================= BROWSE TABS ================= */}
          <BrowseTabs auth={auth} setShowAuth={setShowAuth} />

          {/* ================= STATS SLIDER ================= */}
          <StatsSlider
            stats={stats}
            activeStat={activeStat}
          />

        </div>
      </main>

      {/* ================= BOTTOM NAV ================= */}
      <BottomNav />

      {/* ================= AUTH MODAL ================= */}
      <AuthModal
        show={showAuth}
        setShow={setShowAuth}
      />
    </>
  );
}