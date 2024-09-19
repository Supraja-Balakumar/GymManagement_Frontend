import React from 'react';
 
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="gym2.webp" alt="GymOwl Logo" className="h-12 mb-2" />
            <p className="text-sm">Let’s build it together</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">H-157 Third Floor Noida, Sector 63,<br />Uttar Pradesh, 201307</p>
            <p className="text-sm mt-2">📧 info@gymfit.in</p>
            <p className="text-sm mt-2">📞 +91 85878 85643 | +91 93116 35424</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Support</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">App Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">© Copyright 2024 Gymfit Pvt. Ltd. All rights reserved</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-400">Instagram</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">YouTube</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;
