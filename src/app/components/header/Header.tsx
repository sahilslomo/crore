"use client";

import { Sailboat, User, LogOut } from "lucide-react";

export default function Header({
  user,
  setShowAuth,
  handleLogout,
}: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-6 mb-5 shadow-sm">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center rotate-[-8deg]">
            <Sailboat size={34} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">NAVIK</h1>
            <p className="text-sm text-gray-500">Sail towards COC</p>
          </div>
        </div>

        {/* USER */}
        {user ? (
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 px-4 py-2 rounded-2xl">
              <p className="text-xs text-gray-500">Signed in</p>
              <p className="text-sm font-medium truncate">
                {user.email}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAuth(true)}
            className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <User size={16} />
            Login
          </button>
        )}
      </div>
    </div>
  );
}