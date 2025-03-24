import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Gardis - Blinds & Curtains</title>
        <meta name="description" content="Learn about Gardis, a family-run business specializing in high-quality blinds and curtains since 1978." />
      </Helmet>
      
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="bg-[#225260] text-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Sobre Nós</h1>
              <p className="text-lg">
              Na Persitelas, acreditamos que segurança e conforto devem andar juntos. 
              Com mais de 10 anos de experiência, nos tornamos referência na fabricação e instalação de persianas, 
              telas mosquiteiras e redes de proteção personalizadas, 
              garantindo tranquilidade e bem-estar para lares e empresas em Porto Alegre e região.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/sala_com_persiana.jpeg"
                alt="Family business team at Gardis" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif text-[#225260] mb-4">Compromisso com a Qualidade e Inovação</h2>
              <p className="text-gray-600 mb-4">
              Nossa missão vai além de oferecer produtos – buscamos proporcionar a 
              melhor experiência para nossos clientes, desde o primeiro contato até a instalação. 
              Trabalhamos com materiais de alta resistência, tecnologias modernas e um atendimento próximo e personalizado, 
              garantindo que cada solução seja adaptada às necessidades do cliente.
Com a Persitelas, você tem a certeza de um serviço feito com dedicação, profissionalismo e excelência, 
assegurando um ambiente mais protegido, confortável e harmonioso para você e sua família.
              </p>
         </motion.div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="bg-[#F8F8F8] py-16 mb-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-serif text-[#225260] text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossos Valores
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
  className="bg-white p-6 rounded-lg shadow-md"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="text-3xl text-[#5B412A] mb-4">
    <i className="fas fa-star"></i>
  </div>
  <h3 className="text-xl font-medium text-[#225260] mb-3">Qualidade</h3>
  <p className="text-gray-600">
    Não abrimos mão da qualidade. Cada produto é cuidadosamente fabricado com materiais premium, garantindo durabilidade e excelência em cada detalhe.
  </p>
</motion.div>

<motion.div 
  className="bg-white p-6 rounded-lg shadow-md"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <div className="text-3xl text-[#5B412A] mb-4">
    <i className="fas fa-heart"></i>
  </div>
  <h3 className="text-xl font-medium text-[#225260] mb-3">Atendimento Personalizado</h3>
  <p className="text-gray-600">
    Tratamos cada cliente como parte da família, oferecendo um atendimento próximo e consultoria especializada para encontrar a solução ideal.
  </p>
</motion.div>

<motion.div 
  className="bg-white p-6 rounded-lg shadow-md"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <div className="text-3xl text-[#5B412A] mb-4">
    <i className="fas fa-leaf"></i>
  </div>
  <h3 className="text-xl font-medium text-[#225260] mb-3">Sustentabilidade</h3>
  <p className="text-gray-600">
    Comprometidos com o meio ambiente, adotamos práticas sustentáveis que utilizam materiais eco-friendly e processos que minimizam o impacto ambiental.
  </p>
</motion.div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        {/* <div className="container mx-auto px-4 mb-16">
          <motion.h2 
            className="text-3xl font-serif text-[#225260] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Robert Gardis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-[#225260]">Robert Gardis</h3>
                <p className="text-[#5B412A]">CEO & Founder</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
                  alt="Jessica Gardis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-[#225260]">Jessica Gardis</h3>
                <p className="text-[#5B412A]">Design Director</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Michael Thomas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-[#225260]">Michael Thomas</h3>
                <p className="text-[#5B412A]">Head of Production</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-[#225260]">Sarah Johnson</h3>
                <p className="text-[#5B412A]">Customer Relations</p>
              </div>
            </motion.div>
          </div>
        </div> */}
        
        {/* CTA
        <div className="bg-[#5B412A] text-white py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pronto para Transformar seu Ambiente?
            </motion.h2>
            <motion.p 
              className="mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Browse our collection of premium blinds and curtains or get in touch for a personalized consultation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/products">
                <a className="bg-white text-[#5B412A] px-8 py-3 rounded hover:bg-gray-100 transition">
                  Shop Now
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-[#225260] text-white px-8 py-3 rounded hover:bg-[#225260]/90 transition">
                  Contact Us
                </a>
              </Link>
            </motion.div>
          </div>
        </div> */}
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </>
  );
};

export default About;
