
import { CheckCircle, Award, Users, TrendingUp, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that matter to your business"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategies designed to scale and grow your digital presence"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority, every step of the way"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700">About InLighnTech</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Transforming Ideas Into{" "}
              <span className="text-primary-600">Digital Reality</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At InLighnTech, we're passionate about leveraging technology to solve complex business challenges. 
              With a team of experienced developers, designers, and strategists, we create digital solutions 
              that not only meet your current needs but also position you for future growth.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Custom software development tailored to your needs",
                "Cutting-edge technologies and best practices",
                "Agile methodology for faster delivery",
                "Ongoing support and maintenance"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
