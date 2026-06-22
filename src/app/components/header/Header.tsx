"use client";

import { Sailboat, User, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function Header({
  user,
  setShowAuth,
}: {
  user: any;
  setShowAuth: (v: boolean) => void;
}) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const shortEmail = user?.email
    ? user.email.length > 16
      ? user.email.slice(0, 16) + "..."
      : user.email
    : "";

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-6 mb-5 shadow-sm">

      {/* TOP ROW (MOBILE SAFE STACKING) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rotate-[-8deg] flex-shrink-0">
            <Sailboat size={30} className="text-black" />
          </div>

          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight truncate">
              NAVIK
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              Sail towards COC
            </p>
          </div>
        </div>

        {/* RIGHT */}
        {user?.email ? (
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">

            {/* USER CARD */}
            <div className="bg-gray-100 px-3 py-2 rounded-2xl flex-1 sm:flex-none sm:w-[150px] min-w-0">
              <p className="text-[10px] sm:text-xs text-gray-500">
                Signed in
              </p>

              <p className="text-xs sm:text-sm font-medium truncate">
                {shortEmail}
              </p>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="
                w-10 h-10 sm:w-11 sm:h-11
                rounded-2xl
                bg-black
                text-white
                flex
                items-center
                justify-center
                flex-shrink-0
                hover:opacity-90
                transition
              "
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAuth(true)}
            className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium w-full sm:w-auto justify-center"
          >
            <User size={16} />
            Login
          </button>
        )}
      </div>
    </div>
  );
}