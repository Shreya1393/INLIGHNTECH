
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, TrendingUp, Target, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that matter to your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategies designed to scale and grow your digital presence",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority, every step of the way",
      color: "from-orange-500 to-red-500"
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
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-tech-dark to-tech-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6 glow-blue"
              variants={itemVariants}
            >
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-semibold text-blue-300">About InLighnTech</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-white mb-6 font-poppins"
              variants={itemVariants}
            >
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              At InLighnTech, we're passionate about leveraging technology to solve complex business challenges. 
              With a team of experienced developers, designers, and strategists, we create digital solutions 
              that not only meet your current needs but also position you for future growth.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              {[
                "Custom software development tailored to your needs",
                "Cutting-edge technologies and best practices",
                "Agile methodology for faster delivery",
                "Ongoing support and maintenance"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "100%", label: "On-Time Delivery" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-400 mb-1"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 10px rgba(59, 130, 246, 0.8)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
