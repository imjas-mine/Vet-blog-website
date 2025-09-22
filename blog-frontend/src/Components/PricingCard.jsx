import React from 'react'

const PricingCard = ({
  title,
  price,
  period = 'per visit',
  features = [],
  buttonText = 'Choose Plan',
  highlighted = false,
  badge = ''
}) => {
  return (
    <div className={`relative rounded-lg p-6 text-left bg-white ${highlighted ? 'border-2 border-sky-400 shadow-xl' : 'border border-gray-200'}`}>
      {badge && (
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      <h3 className="text-center text-lg font-semibold mt-6 text-slate-800">{title}</h3>

      <div className="flex items-baseline justify-center gap-2 my-3">
        <span className="text-sky-500 font-bold text-3xl">${price}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>

      <p className="text-center text-gray-400 text-sm mb-4">{highlighted ? 'Complete health evaluation with diagnostic testing' : 'Essential veterinary services for routine care'}</p>

      <ul className="mb-4 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <span className="text-sky-500 mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-2 rounded cursor-pointer ${highlighted ? 'bg-sky-500 text-white  hover:bg-sky-400' : 'border border-sky-400 text-sky-500 hover:bg-sky-400 hover:text-white'}`}>
        {buttonText}
      </button>
    </div>
  )
}

export default PricingCard
