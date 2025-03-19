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
              Persianas e cortinas de qualidade de uma empresa familiar local desde 1978.
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
                <Link href="/services" className="text-white/80 hover:text-white transition">
                  Serviços
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
                <Link href="/products?category=cortinas" className="text-white/80 hover:text-white transition">
                  Cortinas
                </Link>
              </li>
              <li>
                <Link href="/products?category=persianas" className="text-white/80 hover:text-white transition">
                  Persianas
                </Link>
              </li>
              <li>
                <Link href="/products?category=acessorios" className="text-white/80 hover:text-white transition">
                  Acessórios
                </Link>
              </li>
              <li>
                <Link href="/products?new=true" className="text-white/80 hover:text-white transition">
                  Novidades
                </Link>
              </li>
              <li>
                <Link href="/products?sale=true" className="text-white/80 hover:text-white transition">
                  Ofertas Especiais
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
                <span className="text-white/80">Rua Principal, 123, Cidade, SP 12345</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">0800 123 4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">contato@gardis.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-[#5B412A]"></i>
                <span className="text-white/80">Seg-Sex: 9h - 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Legal */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gardis. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Termos e Condições
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">
              Política de Envio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
