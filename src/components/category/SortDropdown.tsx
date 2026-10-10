"use client";

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
      aria-label="পণ্যের দাম অনুযায়ী সাজান"
    >
      <option value="default">ডিফল্ট</option>
      <option value="low-to-high">দাম: কম থেকে বেশি</option>
      <option value="high-to-low">দাম: বেশি থেকে কম</option>
    </select>
  );
}
