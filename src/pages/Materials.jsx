import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import materialsImage from "@/components/images/materials1.jpeg"; 

const Materials = () => {
  const materials = [
    {
      name: "Stainless Steel",
      description: "Corrosion-resistant and durable, perfect for various applications",
      grades: ["304", "316", "430"],
      applications: ["Food Processing", "Medical Equipment", "Architectural"]
    },
    {
      name: "Aluminum",
      description: "Lightweight and versatile metal with excellent strength-to-weight ratio",
      grades: ["6061", "5052", "7075"],
      applications: ["Aerospace", "Transportation", "Construction"]
    },
    {
      name: "Carbon Steel",
      description: "Strong and cost-effective material for structural applications",
      grades: ["A36", "1018", "1045"],
      applications: ["Construction", "Manufacturing", "Heavy Equipment"]
    },
    {
      name: "Copper",
      description: "Excellent thermal and electrical conductivity properties",
      grades: ["C110", "C260", "C360"],
      applications: ["Electrical", "Plumbing", "Decorative"]
    }
  ];

  return (
    <div className="materials-page">
      {/* Hero Section */}
      <section className="materials-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="materials-hero-content"
          >
            <h1 className="materials-hero-title">Our Materials</h1>
            <p className="materials-hero-description">
              We work with a wide range of high-quality metals to meet your specific project requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="materials-grid-section">
        <div className="container">
          <div className="materials-grid">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="material-card"
              >
                <div className="material-card-content">
                  <img 
                    className="material-image"
                    alt={`${material.name} material`}
                    src={materialsImage}
                  />
                  <h3 className="material-title">{material.name}</h3>
                  <p className="material-description">{material.description}</p>
                  
                  <div className="material-grades">
                    <h4 className="material-subtitle">Available Grades:</h4>
                    <div className="grades-list">
                      {material.grades.map((grade) => (
                        <span key={grade} className="grade-tag">
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="material-applications">
                    <h4 className="material-subtitle">Common Applications:</h4>
                    <ul className="applications-list">
                      {material.applications.map((application) => (
                        <li key={application} className="application-item">
                          <Check className="check-icon" />
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <h2 className="quality-title">Quality Assurance</h2>
            <p className="quality-description">
              All our materials undergo rigorous testing and quality control measures to ensure they meet industry standards and your specific requirements.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;