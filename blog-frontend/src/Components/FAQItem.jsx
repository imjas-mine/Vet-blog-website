import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-gray-900 font-medium"
      >
        <p className="mt-2 text-md text-gray-800 hover:underline hover:text-sky-600 hover:cursor-pointer">{question}</p>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="mt-2 text-sm text-gray-600">{answer}</p>
      )}
    </div>
  );
}
