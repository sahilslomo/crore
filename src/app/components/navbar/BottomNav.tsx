"use client";

import {
  Home,
  User,
  BookOpen,
  Bookmark,
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3">
      <Home />
      <BookOpen />
      <Bookmark />
      <User />
    </div>
  );
}