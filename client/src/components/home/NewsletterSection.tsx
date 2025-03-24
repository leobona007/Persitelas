import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [selectedService, setSelectedService] = useState('');
  const { toast } = useToast();

  // Define service options
  const serviceOptions = [
    { value: '', label: 'Selecione um serviço' },
    { value: 'telas-mosquiteiras', label: 'Telas Mosquiteiras' },
    { value: 'telas-protecao', label: 'Telas de Proteção' },
    { value: 'persianas', label: 'Persianas' },
        { value: 'manutencao/conserto', label: 'Manutenção/Conserto' },
  ];

  // WhatsApp phone number (replace with your actual number)
  const whatsappNumber = '5551992233031';

  // Generate WhatsApp message based on selected service
  const getWhatsAppMessage = (service: string) => {
    const messages: Record<string, string> = {
      'telas-mosquiteiras': 'Olá! Vim através do seu Site. E Gostaria de informações sobre Telas Mosquiteiras.',
      'telas-protecao': 'Olá! Vim através do seu Site. E Gostaria de informações sobre Telas de Proteção.',
      'persianas': 'Olá! Vim através do seu Site. E Gostaria de informações sobre Persianas.',
      'manutencao/conserto': 'Olá! Vim através do seu Site. E Gostaria de informações sobre serviços de Manutenção/Conserto.',
      '': 'Olá! Vim através do seu Site. Gostaria de informações sobre seus serviços.'
    };
    
    return messages[service];
  };

  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    if (!selectedService) {
      toast({
        title: 'Erro',
        description: 'Por favor, selecione um serviço',
        variant: 'destructive',
      });
      return;
    }
    
    const message = getWhatsAppMessage(selectedService);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-[#5B412A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Entre em Contato Conosco!</h2>
          <p className="mb-8">
            Selecione o tipo de serviço que está procurando e clique no botão para conversar com a gente!
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <select
              className="flex-grow px-4 py-3 rounded-l sm:rounded-r-none mb-3 sm:mb-0 focus:outline-none text-gray-800"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button 
              type="button" 
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium px-6 py-3 rounded-r sm:rounded-l-none transition flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Falar no WhatsApp
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
