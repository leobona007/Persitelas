import { Link } from 'wouter';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="/sala_com_persianas.png"
              alt="Elegant interior with premium curtains" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-[#225260] mb-6">
            Persitelas – Segurança, conforto e estilo sob medida para o seu lar!
            </h2>
            <p className="text-gray-700 mb-6">
            Nosso compromisso vai além da estética: priorizamos qualidade, 
            durabilidade e proteção para você e sua família. Trabalhamos 
            com materiais de alta resistência e tecnologia avançada para 
            oferecer produtos que unem funcionalidade e design sofisticado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-tape"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Feito para você</h3>
                  <p className="text-gray-600 text-sm">
                  Com um atendimento próximo e especializado, ajudamos você a encontrar a solução ideal para o seu espaço..
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Orçamento Aprovado!</h3>
                  <p className="text-gray-600 text-sm">
                    Entregamos seu produto em menos de 3 dias!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Experiencia</h3>
                  <p className="text-gray-600 text-sm">
                    Persitelas empresa no ramo há mais de 10 anos, sempre buscando a excelencia em servir!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Satisfação dos clientes</h3>
                  <p className="text-gray-600 text-sm">
                  Nosso compromisso vai além da instalação, garantimos um atendimento personalizado para que cada cliente tenha a melhor experiência, até o pós-venda.
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <a className="bg-[#225260] hover:bg-[#225260]/90 text-white font-medium px-8 py-3 inline-block mt-8 transition">
                Faça seu orçamento!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
