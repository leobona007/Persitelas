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
            <img 
              src="/public/persianas_portoalegre.svg" 
              alt="Persianas Porto Alegre" 
              className="h-12"
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`hover:text-[#5B412A] font-medium ${location === '/' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Início
          </Link>
          <Link href="/products" className={`hover:text-[#225260] font-medium ${location === '/products' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Produtos
          </Link>
          <Link href="/about" className={`hover:text-[#225260] font-medium ${location === '/about' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Sobre
          </Link>
          <Link href="/contact" className={`hover:text-[#225260] font-medium ${location === '/contact' ? 'text-[#225260] border-b-2 border-[#225260]' : 'text-gray-600'}`}>
            Contato
          </Link>
        </nav>

        {/* Right Section with Contact and Cart */}
        <div className="flex items-center space-x-6">
          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="text-[#225260] mr-2">
              <i className="fas fa-phone-alt"></i>
            </div>
            <span className="text-sm font-medium">(51) 99223-3031</span>
          </div>

          {/* Instagram Icon */}
          <div className="relative">
            <a 
              href="https://www.instagram.com/persitelas/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center p-2 rounded-full text-[#225260] hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
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
      <div className={`md:hidden bg-white shadow-md absolute w-full top-full left-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <Link href="/" className={`py-2 border-b border-gray-100 ${location === '/' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Início
          </Link>
          <Link href="/products" className={`py-2 border-b border-gray-100 ${location === '/products' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Produtos
          </Link>
          <Link href="/about" className={`py-2 border-b border-gray-100 ${location === '/about' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Sobre
          </Link>
          <Link href="/contact" className={`py-2 ${location === '/contact' ? 'text-[#225260]' : 'text-gray-600 hover:text-[#225260]'} font-medium`}>
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};

// WhatsApp Floating Button
export const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5551992233031&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+seu+Site.+E+Gostaria+de+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5C] hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default Header;
