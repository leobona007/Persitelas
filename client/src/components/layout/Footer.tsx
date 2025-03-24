import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-[#225260] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link href="/" className="flex items-center">
            <img 
              src="/persianas_portoalegre.svg" 
              alt="Persianas Porto Alegre" 
              className="h-12"
            />
          </Link>
            <p className="text-white/80 mb-6">
              Persianas, Redes e Mosquiteiros de qualidade há mais de 10 anos no mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/portopersianas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/persitelas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5551992233031" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5B412A] transition">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition">
                  Produtos
                </Link>
              </li>
                          <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Produtos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=blinds" className="text-white/80 hover:text-white transition">
                  Persianas
                </Link>
              </li>
                              <li>
                <Link href="/products?category=curtains" className="text-white/80 hover:text-white transition">
                  Tela Proteção
                </Link>
              </li>
              <li>
                <Link href="/products?category=shades" className="text-white/80 hover:text-white transition">
                  Mosquiteiras
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-lg mb-6">Entre em Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">Av. Manoel Elias, 2433 - Porto alegre/RS</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">(51) 99223-3031</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">contato@persitelas.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">Seg-Sex: 8h - 18h</span>
              </li>
              <li className="flex items-center">
              <i className="fas fa-clock mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">Sabádo: 8h - 12h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Legal */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Persitelas. Todos os direitos reservados.
          </p>
                 </div>
      </div>
    </footer>
  );
};

export default Footer;
