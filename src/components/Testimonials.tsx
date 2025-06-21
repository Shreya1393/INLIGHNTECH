
import { motion } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-tech-darker to-tech-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6 glow-blue"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-semibold text-blue-300">Client Testimonials</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their 
            experience working with InLighnTech and the results we've delivered.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Hover Gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <div className="relative z-10">
                {/* Quote Icon */}
                <motion.div 
                  className="mb-6"
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />
                </motion.div>
                
                {/* Rating */}
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Content */}
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  "{testimonial.content}"
                </motion.p>
                
                {/* Author */}
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500/30"
                    whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.8)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-xs text-blue-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center border border-blue-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "1000+", label: "Projects Completed" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.8)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
