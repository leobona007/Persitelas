import { useState, FormEvent } from 'react';
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
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
        <title>Contact Us | Gardis - Blinds & Curtains</title>
        <meta name="description" content="Get in touch with Gardis for custom window treatments, inquiries about our products, or to schedule a consultation." />
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
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
              <p className="text-lg">
                Have questions or need assistance? We're here to help. 
                Reach out to our team for personalized service.
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
              <h2 className="text-2xl font-serif text-[#225260] mb-6">Get In Touch</h2>
              
              <div className="bg-[#F8F8F8] p-6 rounded-lg mb-8">
                <div className="mb-6">
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Visit Our Store</h3>
                  <p className="text-gray-600">
                    123 Main Street<br />
                    Anytown, ST 12345<br />
                    United States
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Contact Information</h3>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-phone-alt mr-2 text-[#5B412A]"></i>
                    (51) 99223-3031
                  </p>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-envelope mr-2 text-[#5B412A]"></i>
                    info@gardis.com
                  </p>
                  <p className="text-gray-600">
                    <i className="fas fa-globe mr-2 text-[#5B412A]"></i>
                    www.gardis.com
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Business Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600 mb-1">Saturday: 10AM - 4PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-[#225260] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#225260] text-white flex items-center justify-center hover:bg-[#5B412A] transition">
                    <i className="fab fa-pinterest-p"></i>
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
              <h2 className="text-2xl font-serif text-[#225260] mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
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
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email *</label>
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
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
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
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#225260]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Installation">Installation</option>
                      <option value="Return">Return</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
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
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mb-16">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-2xl font-serif text-[#225260]">Find Us</h2>
          </div>
          <div className="w-full h-[400px] bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25987584096475!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1678286581798!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gardis Location Map"
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
