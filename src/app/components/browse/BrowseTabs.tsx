"use client";

const tabs = [
  "MOTOR",
  "MEP",
  "GENERAL",
  "SSEP",
  "ELECTRICAL",
  "NAVAL",
];

export default function BrowseTabs() {
  return (
    <div className="mt-10">
      <h2 className="text-sm font-bold text-gray-500 mb-4">
        BROWSE BY WRITTEN
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tabs.map((t, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-5 min-h-[120px] flex items-center justify-center font-bold"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}