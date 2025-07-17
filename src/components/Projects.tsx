import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Brain, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Power BI Retail Analytics Dashboard',
      description: 'A comprehensive retail analytics dashboard built with Power BI, providing insights into sales performance, customer behavior, and inventory management with interactive visualizations.',
      tools: ['Power BI', 'DAX', 'SQL', 'Excel'],
      icon: <BarChart3 className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'ML Model for Ad Performance Prediction',
      description: 'Developed a machine learning model to predict advertisement performance using Python, scikit-learn, and TensorFlow. Achieved 89% accuracy in predicting click-through rates.',
      tools: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas'],
      icon: <Brain className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'MySQL Sales Report Generator',
      description: 'Automated sales reporting system using MySQL and Python, generating comprehensive reports with data visualization and email automation for stakeholders.',
      tools: ['MySQL', 'Python', 'Matplotlib', 'Flask'],
      icon: <Database className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/7947636/pexels-photo-7947636.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-white dark:bg-gray-800 rounded-full text-blue-600">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <motion.a
                    href={project.liveLink}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">View Live</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;