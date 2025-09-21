import React from 'react'
import servicesData from "../data/services.json";
import { Stethoscope, Syringe, Heart, ClipboardCheck } from "lucide-react";
import ServiceCard from '../Components/ServiceCard';

const icons = { Stethoscope, Syringe, Heart, ClipboardCheck };
const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
       
        <p className="text-blue-500 font-semibold mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Comprehensive Veterinary Care
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From routine wellness exams to vaccinations and dental care, we provide
          trusted services to keep your pet healthy and happy.
        </p>

        
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.map((service, index) => {
            const Icon = icons[service.icon];
            return <ServiceCard key={index} {...service} icon={Icon} />;
          })}
        </div>

        {/* CTA section */}
        <div className="mt-16 bg-blue-100 p-8 rounded-xl text-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Need more information about our services or want to discuss your pet&apos;s specific needs?
          </h3>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
