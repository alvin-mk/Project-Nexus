import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-12 px-6 md:px-10 lg:px-20 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-start space-y-3">
          <h2 className="text-3xl font-bold">
          <span className=" text-[rgb(55,236,58)]">Film<span className="text-[#37d0de]">Verse</span></span>
          </h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Your trusted companion for exploring movies, reviews, and exclusive content. Join the cinematic experience with us!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start md:items-center space-y-6">
  <h3 className="text-xl font-semibold">Quick Links</h3>
  <div className="flex flex-wrap gap-6">
    <Link href="/home" className="hover:text-[#5909e2] transition-colors duration-300">Home</Link>
    <Link href="/movies" className="hover:text-[#5909e2] transition-colors duration-300">Movies</Link>
    <Link href="/contact" className="hover:text-[#5909e2] transition-colors duration-300">Contact</Link>
    <Link href="/privacy" className="hover:text-[#5909e2] transition-colors duration-300">Privacy Policy</Link>
  </div>
</div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5909e2] transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5909e2] transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5909e2] transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FlickPick. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
