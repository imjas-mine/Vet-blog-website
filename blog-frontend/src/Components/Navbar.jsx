import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-white shadow-sm fixed top-0 left-0 z-50">
     
      <div className="text-lg md:text-xl font-bold text-sky-600">
        Dr. Simran Kaur
      </div>

      
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-sky-600 cursor-pointer">About</li>
        <li className="hover:text-sky-600 cursor-pointer">Services</li>
        <li className="hover:text-sky-600 cursor-pointer">Pricing</li>
        <li className="hover:text-sky-600 cursor-pointer">FAQ</li>
        <li className="hover:text-sky-600 cursor-pointer">Blog</li>
      </ul>

      
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={18} className="text-sky-600" />
          <span>(555) 533- 8833</span>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
          Book Appointment
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-6 md:hidden">
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#services" className="hover:text-sky-600">Services</a>
          <a href="#pricing" className="hover:text-sky-600">Pricing</a>
          <a href="#faq" className="hover:text-sky-600">FAQ</a>
          <a href="#blog" className="hover:text-sky-600">Blog</a>

          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={18} className="text-sky-600" />
              <span>(555) 123-PETS</span>
            </div>
            <button className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
