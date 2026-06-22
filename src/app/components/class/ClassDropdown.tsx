"use client";

export default function ClassDropdown({
  selectedClass,
  setSelectedClass,
}: any) {
  return (
    <div className="mb-8">
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-2xl px-4 py-4"
      >
        <option value="class2">MEO CLASS 2</option>
        <option value="class4">MEO CLASS 4</option>
      </select>
    </div>
  );
}