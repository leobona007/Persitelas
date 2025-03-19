import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-md py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-[#225260]">
              <span>Gardis</span>
              <span className="text-sm block font-sans text-[#5B412A]">Blinds & Curtains</span>
            </h1>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`hover:text-[#5B412A] font-medium ${location === '/' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Home
          </Link>
          <Link href="/products" className={`hover:text-[#225260] font-medium ${location === '/products' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Products
          </Link>
          <Link href="/about" className={`hover:text-[#225260] font-medium ${location === '/about' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            About
          </Link>
          <Link href="/contact" className={`hover:text-[#225260] font-medium ${location === '/contact' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Contact
          </Link>
        </nav>

        {/* Right Section with Contact and Cart */}
        <div className="flex items-center space-x-6">
          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="text-[#225260] mr-2">
              <i className="fas fa-phone-alt"></i>
            </div>
            <span className="text-sm font-medium">800 123 4567</span>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link href="/cart" className="text-[#225260] hover:text-[#5B412A]">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-[#5B412A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#225260]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <Link href="/" className={`py-2 border-b border-gray-100 ${location === '/' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Home
          </Link>
          <Link href="/products" className={`py-2 border-b border-gray-100 ${location === '/products' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Products
          </Link>
          <Link href="/about" className={`py-2 border-b border-gray-100 ${location === '/about' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            About
          </Link>
          <Link href="/contact" className={`py-2 ${location === '/contact' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
