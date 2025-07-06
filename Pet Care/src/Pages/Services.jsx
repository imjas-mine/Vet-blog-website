import React from 'react'
import Navbar from '../Components/Navbar'

const Services = () => {
  const services = [
    {
      emoji: "💉",
      title: "Wellness Exams & Vaccinations",
      description: "Routine checkups and vaccinations to detect and prevent health issues early."
    },
    {
      emoji: "🦷",
      title: "Dental Care",
      description: "Professional cleanings and dental exams to maintain your pet's oral health."
    },
    {
      emoji: "🔬",
      title: "Lab Testing & Diagnostics",
      description: "Advanced testing to accurately diagnose various conditions."
    },
    {
      emoji: "🥗",
      title: "Pet Nutrition Counseling",
      description: "Tailored nutrition plans to ensure your pet's diet meets their individual needs."
    },
    {
      emoji: "🏠",
      title: "Home Visits",
      description: "Caring for your pet in the comfort and convenience of your home."
    },
    {
      emoji: "🐾",
      title: "Surgery Services",
      description: "From routine procedures to complex surgeries with state-of-the-art equipment."
    }
  ]

  return (
    <div className='bg-indigo-100 min-h-screen w-full'>
      <Navbar />
      <div className='px-4 py-8 md:px-28 md:py-10 mx-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-center mb-4 text-indigo-900 font-serif'>Our Services</h1>
        <p className='text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto'>
          Comprehensive pet care services tailored to keep your furry friends healthy and happy
        </p>

        <div className='flex flex-col md:flex-row gap-10 max-w-7xl mx-auto'>
          {/* Services Section */}
          <div className='md:w-2/3'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {services.map((service, index) => (
                <div key={index} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <div className='text-4xl mb-4'>{service.emoji}</div>
                  <h3 className='text-xl font-bold mb-2 text-indigo-900'>{service.title}</h3>
                  <p className='text-gray-600'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className='md:w-1/3 bg-white rounded-xl shadow-md p-8'>
            <h2 className='text-2xl font-bold mb-6 text-indigo-900'>Get in Touch</h2>
            
            <div className='space-y-6'>
              <div>
                <div className='flex items-center gap-3 text-lg font-semibold text-indigo-900 mb-2'>
                  📞 Phone
                </div>
                <p className='text-gray-600'>+1 (123) 456-7890</p>
              </div>

              <div>
                <div className='flex items-center gap-3 text-lg font-semibold text-indigo-900 mb-2'>
                  ✉️ Email
                </div>
                <p className='text-gray-600'>simran@gmail.com</p>
              </div>

              <div>
                <div className='flex items-center gap-3 text-lg font-semibold text-indigo-900 mb-2'>
                  📍 Location
                </div>
                <p className='text-gray-600'>Animal Home<br />Cambridge, Ontario, Canada</p>
              </div>

              <div>
                <div className='flex items-center gap-3 text-lg font-semibold text-indigo-900 mb-2'>
                  ⏰ Hours
                </div>
                <div className='text-gray-600'>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday & Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <button className='w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 mt-6'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 