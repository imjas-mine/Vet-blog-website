import FAQList from "../Components/FAQList";
import FAQTabs from "../Components/FAQTabs";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl font-bold mt-3 text-gray-900">
          Get Your Questions Answered
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Find answers to common questions from pet owners, veterinary professionals, and partner clinics.
        </p>
      </div>
      <FAQList />
    </div>
  );
}
