import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                    UP
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Data Science Meets Marketing Excellence
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Data & Marketing Strategist with a unique blend of technical expertise and creative marketing vision. 
                With deep knowledge in machine learning, data analysis, and digital marketing, I help businesses transform raw data 
                into actionable strategies that drive growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey spans from building sophisticated ML models to crafting compelling marketing campaigns, 
                always with the goal of creating meaningful impact through data-driven decision making.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Python, ML, Deep Learning</p>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Power BI, MySQL, Reporting</p>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Brain className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Digital Strategy, Direction</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;