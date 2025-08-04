import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, Database, Brain, TrendingUp, Code } from 'lucide-react';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Real-Time Stock Market Data Pipeline",
      category: "Data Engineering",
      description: "Built comprehensive real-time ETL pipelines using PySpark and Kafka for processing 10TB+ monthly financial data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["PySpark", "Databricks", "AWS S3", "Apache Airflow", "Kafka"],
      features: [
        "Real-time data processing with Kafka streams",
        "50% reduction in processing latency",
        "30% improvement in query performance",
        "Distributed storage optimization with AWS S3",
        "Advanced financial trend analysis capabilities"
      ],
      metrics: [
        { label: "Data Volume", value: "10TB/month" },
        { label: "Latency Reduction", value: "50%" },
        { label: "Performance Gain", value: "30%" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Telecom Churn Prediction System",
      category: "Machine Learning",
      description: "Deployed an advanced churn prediction framework achieving 87.29% accuracy for targeted customer retention",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Flask", "Python", "XGBoost", "Decision Tree", "Scikit-learn"],
      features: [
        "87.29% prediction accuracy",
        "A/B testing across multiple ML algorithms",
        "Targeted customer retention campaigns",
        "Real-time prediction API",
        "Interactive web dashboard"
      ],
      metrics: [
        { label: "Accuracy", value: "87.29%" },
        { label: "Model Performance", value: "Optimized" },
        { label: "Retention Impact", value: "Significant" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Analytics Dashboard",
      category: "Business Intelligence",
      description: "Comprehensive analytics platform processing 1M+ patient records with advanced clustering and risk analysis",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
      technologies: ["Power BI", "SQL", "Apache Superset", "Python", "K-means"],
      features: [
        "1M+ patient records analysis",
        "K-means clustering for risk identification",
        "8% improvement in hospital performance",
        "Real-time dashboard updates",
        "GDPR compliant data handling"
      ],
      metrics: [
        { label: "Records Processed", value: "1M+" },
        { label: "Performance Boost", value: "8%" },
        { label: "Compliance", value: "GDPR" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Enterprise Data Integration Platform",
      category: "Data Architecture",
      description: "Multi-source data integration handling XML, JSON, and flat files with automated PowerShell and Python scripting",
      image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b",
      technologies: ["PowerShell", "Python", "SSIS", "SQL", "Azure Data Factory"],
      features: [
        "Multi-format data integration (XML, JSON, flat files)",
        "Automated workflow orchestration",
        "Real-time API integrations",
        "Robust error handling and monitoring",
        "Scalable architecture design"
      ],
      metrics: [
        { label: "Data Sources", value: "Multiple" },
        { label: "Automation", value: "Full" },
        { label: "Reliability", value: "99.9%" }
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = projectsRef.current?.querySelectorAll('[data-id]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data Engineering': return Database;
      case 'Machine Learning': return Brain;
      case 'Business Intelligence': return TrendingUp;
      case 'Data Architecture': return Code;
      default: return Database;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Engineering': return 'bg-blue-100 text-blue-700';
      case 'Machine Learning': return 'bg-purple-100 text-purple-700';
      case 'Business Intelligence': return 'bg-green-100 text-green-700';
      case 'Data Architecture': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Innovative solutions that transform data into actionable insights, 
            delivering measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                data-id={project.id}
                className={`group transition-all duration-1000 transform ${
                  visibleItems.has(project.id) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                        <IconComponent className="w-4 h-4 mr-2" />
                        {project.category}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <Github className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="font-bold text-gray-900 text-lg">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        View Details
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-semibold text-gray-900">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <button className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300">
                    Live Demo
                  </button>
                  <button className="flex-1 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;