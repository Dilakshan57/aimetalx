import React from "react";
import { motion } from "framer-motion";
import { Users, Target, History } from "lucide-react";
import aboutImage from "@/components/images/about1.jpeg"; 
import backgroundImage from "@/components/images/bg.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" >
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-hero-content"
          >
            <h1 className="about-hero-title">About AI Metal X</h1>
            <p className="about-hero-description">
              Leading the future of metal fabrication with innovation, precision, and dedication to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overview-image-container"
          >
            <img
              src={aboutImage}
              alt="Modern metal fabrication facility"
              className="overview-image"
            />
          </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overview-content"
            >
              <h2 className="overview-title">Our Story</h2>
              <p className="overview-text">
                Founded in 2025, AI Metal X has quickly established itself as a leader in the metal fabrication industry. 
                Our commitment to innovation and quality has driven us to invest in the latest technology and talent.
              </p>
              <p className="overview-text">
                We combine artificial intelligence with traditional craftsmanship to deliver superior results. 
                Our team of experts works tirelessly to ensure every project meets the highest standards of quality and precision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in every project, ensuring the highest quality standards."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together with our clients to achieve the best possible outcomes."
              },
              {
                icon: History,
                title: "Innovation",
                description: "Continuously evolving and adopting new technologies to stay ahead."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="value-card"
              >
                <value.icon className="value-icon" />
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="team-title">Our Leadership Team</h2>
          <div className="team-grid">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                description: "Expert in metal fabrication with 20+ years of industry experience",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              },
              {
                name: "Sarah Johnson",
                position: "Technical Director",
                description: "Specialized in advanced manufacturing processes and automation",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              },
              {
                name: "Michael Chen",
                position: "Operations Manager",
                description: "Ensures smooth project execution and quality control",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="team-member"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <p className="team-member-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;