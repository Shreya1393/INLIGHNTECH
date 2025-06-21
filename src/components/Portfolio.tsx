
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare Mobile App",
      description: "Mobile application for healthcare providers featuring patient management, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      category: "Mobile Development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Dashboard",
      description: "Comprehensive financial analytics dashboard with real-time data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      category: "Data Analytics",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
      category: "Web Development",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "IoT Management System",
      description: "Internet of Things management platform for monitoring and controlling connected devices across multiple locations.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Angular", "MQTT", "InfluxDB", "Docker"],
      category: "IoT Solutions",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, interactive quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "MySQL", "FFmpeg"],
      category: "Education Technology",
      gradient: "from-teal-500 to-green-500"
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
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-br from-tech-dark to-tech-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
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
            <Eye className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-semibold text-blue-300">Our Portfolio</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Explore our recent work and see how we've helped businesses across various industries 
            achieve their digital transformation goals through innovative solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                >
                  <div className="flex space-x-4">
                    <motion.button 
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button 
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.span 
                    className={`text-xs font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full border border-blue-500/20`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md border border-blue-500/30"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button 
            className="bg-tech-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 glow-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
