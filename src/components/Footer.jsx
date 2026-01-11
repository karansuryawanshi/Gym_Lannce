import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Business Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            IronCore Fitness
          </h3>
          <p className="text-sm text-gray-400">
            Your trusted fitness destination.
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-white font-semibold mb-3">Address</h4>
          <address className="not-italic text-sm text-gray-400 leading-relaxed">
            2nd Floor, ABC Complex
            <br />
            Baner Road, Pune, Maharashtra
            <br />
            411045
          </address>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="tel:+919999999999"
                className="hover:text-white transition"
              >
                +91 99999 99999
              </a>
            </li>
            <li>
              <a
                href="mailto:info@ironcorefitness.com"
                className="hover:text-white transition"
              >
                info@ironcorefitness.com
              </a>
            </li>
          </ul>
        </div>

        {/* Timings */}
        <div>
          <h4 className="text-white font-semibold mb-3">Opening Hours</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Mon – Sat: 6:00 AM – 10:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1f1f1f] my-8" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} IronCore Fitness. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
