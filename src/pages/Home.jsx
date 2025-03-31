import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "@/components/images/bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title"
          >
            Precision Metal Fabrication for the Future
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-description"
          >
            Leading the industry with advanced technology and unmatched expertise in metal fabrication solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="button-group"
          >
            <button className="button button-primary" onClick={() => navigate('/contact')}>
              Get Started
              <ArrowRight className="icon" />
            </button>
            <button className="button button-outline" onClick={() => navigate('/services')}>
              Our Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Why Choose AI Metal X</h2>
            <p className="section-description">
              We combine cutting-edge technology with decades of expertise to deliver exceptional metal fabrication solutions.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Every project undergoes rigorous quality control measures to ensure perfection."
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Efficient processes and advanced machinery enable quick project completion."
              },
              {
                icon: Award,
                title: "Expert Team",
                description: "Our skilled professionals bring years of experience and dedication to every project."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <feature.icon className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Contact us today to discuss your metal fabrication needs and get a free consultation.
          </p>
          <button
            className="button button-secondary"
            onClick={() => navigate('/contact')}
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;