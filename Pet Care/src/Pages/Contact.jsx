import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
        <div className='bg-indigo-100 min-h-screen w-full'>
        <Navbar />

        <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-xl shadow-lg m-10">
          {/* Services Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-10">Services</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Wellness Exams & Vaccinations:</span>
                Routine checkups and vaccinations to detect and prevent health issues early.
              </li>
              <li>
                <span className="font-semibold">Dental Care:</span>
                Professional cleanings and dental exams to maintain your pet's oral health.
              </li>
              <li>
                <span className="font-semibold">Lab Testing & Diagnostics:</span>
                Advanced testing to accurately diagnose various conditions.
              </li>
              <li>
                <span className="font-semibold">Pet Nutrition Counseling:</span>
                Tailored nutrition plans to ensure your pet's diet meets their individual needs.
              </li>
              <li>
                <span className="font-semibold">Home Visits:</span>
                Caring for your pet in the comfort and convenience of your home.
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-2">
              <div><span className="font-semibold">Phone:</span> (123) 456-7890</div>
              <div><span className="font-semibold">Email:</span> dr.simran@example.com</div>
              <div><span className="font-semibold">Address:</span> 123 Pet Care Lane, City, State</div>
              <div><span className="font-semibold">Hours:</span> Mon-Fri 9am-6pm</div>
            </div>
          </div>
        </div>

        </div>
  )
}

export default Contact
