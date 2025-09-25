import React from 'react'
import PricingCard from '../Components/PricingCard'
import plans from '../data/pricing.json'
const Pricing = () => {
  

  return (
     <section id="pricing" >
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <div className="mb-10">
        <small className="inline-block bg-sky-100 text-sky-500 px-3 py-1 rounded-full text-xs">Transparent Pricing</small>
        <h2 className="text-4xl font-semibold mt-4 text-slate-800">Quality Care at Fair Prices</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mt-3 text-xl">We believe in transparent pricing with no hidden fees. Quality veterinary care shouldn't break the bank.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <PricingCard key={i} {...p} />
        ))}
      </div>
    </div>
    </section>
  )
}

export default Pricing
