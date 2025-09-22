import FAQItem from "./FAQItem";

export default function FAQList({ title, data }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-500 text-sm mb-6">
        Common questions from {title.toLowerCase()} about our services, policies, and care recommendations.
      </p>
      <div className="divide-y divide-gray-200">
        {data.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
