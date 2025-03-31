import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Scissors, Wrench, Zap, Factory, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Scissors,
      name: "Precision Cutting",
      description: "Advanced laser and plasma cutting services for accurate and clean cuts across various materials."
    },
    {
      icon: Ruler,
      name: "Custom Fabrication",
      description: "Tailored metal fabrication solutions to meet your specific project requirements."
    },
    {
      icon: Wrench,
      name: "Assembly & Welding",
      description: "Expert welding(MIG, TIG, SPOT)) and assembly services using state-of-the-art equipment."
    },
    {
      icon: Zap,
      name: "CNC Machining",
      description: "High-precision CNC machining for complex parts and components."
    },
    {
      icon: Factory,
      name: "Production Support",
      description: "Full-scale production support for manufacturing and industrial projects."
    },
    {
      icon: Truck,
      name: "Logistics & Delivery",
      description: "Efficient logistics and delivery services to ensure timely project completion."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="services-hero-content"
          >
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-description">
              Comprehensive metal fabrication solutions powered by advanced technology and expert craftsmanship.
            </p>
            <button 
              className="hero-button"
              onClick={() => navigate('/contact')}
            >
              Request a Quote
              <ArrowRight className="button-icon" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <service.icon className="service-icon" />
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="process-title">Our Process</h2>
          <div className="process-grid">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Initial discussion to understand your requirements"
              },
              {
                step: "2",
                title: "Design",
                description: "Detailed planning and design phase"
              },
              {
                step: "3",
                title: "Fabrication",
                description: "Precision manufacturing of your components"
              },
              {
                step: "4",
                title: "Delivery",
                description: "Quality check and timely delivery"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="process-card"
              >
                <div className="process-step">{step.step}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Contact us today to discuss your metal fabrication needs and get a free consultation.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/contact')}
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;