
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "InLighnTech transformed our outdated system into a modern, efficient platform. Their expertise and dedication exceeded our expectations. The team was professional, responsive, and delivered on time.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with InLighnTech was a game-changer for our business. They understood our complex requirements and delivered a solution that perfectly aligned with our goals. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoVision",
      company: "EcoVision",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The mobile app InLighnTech developed for us has been instrumental in growing our user base. The design is intuitive, the performance is excellent, and the ongoing support is outstanding.",
      rating: 5
    },
    {
      name: "David Kim",
      position: "Director of IT, FinanceCore",
      company: "FinanceCore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "InLighnTech's cloud migration services helped us reduce costs by 40% while improving performance. Their team guided us through every step of the process with expertise and care.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "The e-commerce platform they built for us has dramatically increased our online sales. The user experience is seamless, and the admin dashboard makes managing our store effortless.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "VP of Operations, LogiTech Corp",
      company: "LogiTech Corp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "From initial consultation to final deployment, InLighnTech demonstrated professionalism and technical excellence. They delivered a robust solution that has streamlined our operations.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-700">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            What Our{" "}
            <span className="text-primary-600">Clients Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their 
            experience working with InLighnTech and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary-600 opacity-50" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-primary-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-gradient rounded-2xl p-8 lg:p-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
