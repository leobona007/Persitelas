import { useState, FormEvent, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import NewsletterSection from '@/components/home/NewsletterSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validação básica do formulário
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Erro',
        description: 'Por favor, preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      toast({
        title: 'Mensagem Enviada!',
        description: 'Obrigado por entrar em contato conosco. Retornaremos em breve.',
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Entre em Contato | Persitelas Persianas e telas de proteção</title>
        <meta name="description" content="Entre em contato com a Persitelas para persianas sob medida, telas de proteção, ou para agendar uma visita técnica." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-[#225260] text-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Contate-nos</h1>
              <p className="text-lg">
                Tem dúvidas ou precisa de assistência? Estamos aqui para ajudar.
                Entre em contato com nossa equipe para um atendimento personalizado.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Information */}
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif text-[#225260] mb-6">Fale Conosco</h2>
              
              <div className="bg-[#F8F8F8] p-6 rounded-lg mb-8">
                <div className="mb-6">
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Nossa Loja</h3>
                  <p className="text-gray-600">
                    Av. Manoel Elias, 2433<br />
                    Porto Alegre, RS 91240-260<br />
                    Brasil
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Informações de Contato</h3>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-phone-alt mr-2 text-[#5B412A]"></i>
                    (51) 99223-3031
                  </p>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-envelope mr-2 text-[#5B412A]"></i>
                    contato@persitelas.com.br
                  </p>
                  <p className="text-gray-600">
                    <i className="fas fa-globe mr-2 text-[#5B412A]"></i>
                    www.persitelas.com.br
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600 mb-1">Segunda - Sexta: 8h às 18h</p>
                  <p className="text-gray-600 mb-1">Sábado: 8h às 12h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-[#225260] mb-4">Siga-nos</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/persitelas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/persitelas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-serif text-[#225260] mb-6">Envie-nos uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Seu Nome *</label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Seu Email *</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Product Inquiry">Informações sobre Produtos</option>
                      <option value="Custom Order">Orçamento Personalizado</option>
                      <option value="Installation">Instalação</option>
                      <option value="Return">Devolução</option>
                      <option value="Other">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Sua Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-[#225260] text-white px-6 py-3 rounded-md hover:bg-[#225260]/90 transition disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : 'Enviar Mensagem'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mb-16">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-2xl font-serif text-[#225260]">Encontre-nos</h2>
          </div>
          <div className="w-full h-[400px] bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2576646064!2d-51.1657813!3d-30.0207369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x378a1a6755f5ade5!2sPersitelas!5e0!3m2!1spt-BR!2sbr!4v1678286581798!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Persitelas"
            ></iframe>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </>
  );
};

export default Contact;
