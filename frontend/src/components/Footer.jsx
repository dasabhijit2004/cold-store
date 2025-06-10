import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Cold Storage Pvt. Ltd.</h2>
          <p className="text-gray-400 leading-relaxed">
            Delivering state-of-the-art cold storage solutions to keep your products fresh and safe.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-white transition">
                Support
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>123 Cold Storage St, Mumbai, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+911234567890" className="hover:text-white transition">
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:info@coldstorage.com" className="hover:text-white transition">
                info@coldstorage.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cold Storage Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
