
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark gradient background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95 z-0"></div>
      
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
