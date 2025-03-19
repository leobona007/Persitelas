import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-[#225260] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Gardis</h3>
            <p className="text-white/80 mb-6">
              Quality blinds and curtains from local family-run business since 1978.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=curtains" className="text-white/80 hover:text-white transition">
                  Curtains
                </Link>
              </li>
              <li>
                <Link href="/products?category=blinds" className="text-white/80 hover:text-white transition">
                  Blinds
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-white/80 hover:text-white transition">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?new=true" className="text-white/80 hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?sale=true" className="text-white/80 hover:text-white transition">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">123 Main Street, Anytown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">800 123 4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">info@gardis.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Legal */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gardis. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Terms & Conditions
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
