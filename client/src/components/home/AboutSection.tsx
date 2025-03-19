import { Link } from 'wouter';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
              alt="Elegant interior with premium curtains" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-[#225260] mb-6">
              Quality Blinds And Curtains From Local Family-Run Business
            </h2>
            <p className="text-gray-700 mb-6">
              We stock hundreds of quality fabrics and accessories for blinds and curtains, 
              in a huge range of styles, colors and patterns, so you're pretty much 
              guaranteed to find just what you're looking for.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-tape"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Made To Measure</h3>
                  <p className="text-gray-600 text-sm">
                    We may be a small team but we're big on service excellence and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">At Your Convenience</h3>
                  <p className="text-gray-600 text-sm">
                    Our typical lead time to supply and fit your blinds or curtains is just 10 days.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">We Do It All For You</h3>
                  <p className="text-gray-600 text-sm">
                    We may be a small team but we're big on service excellence and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-[#5B412A] text-xl mr-4">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-[#225260] mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-sm">
                    Our dedicated professionals ensure high-quality products and exceptional service every time.
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <a className="bg-[#225260] hover:bg-[#225260]/90 text-white font-medium px-8 py-3 inline-block mt-8 transition">
                Learn More About Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
