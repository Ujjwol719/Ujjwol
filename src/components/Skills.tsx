import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, Brain, TrendingUp, Code, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'Power BI',
      level: 90,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      name: 'Python',
      level: 85,
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      name: 'MySQL',
      level: 80,
      icon: <Database className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      name: 'Deep Learning',
      level: 85,
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      name: 'Machine Learning',
      level: 90,
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      name: 'Digital Marketing',
      level: 88,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-pink-500'
    },
    {
      name: 'Marketing Director',
      level: 85,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${skill.color.replace('bg-', 'bg-')} text-white mr-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;