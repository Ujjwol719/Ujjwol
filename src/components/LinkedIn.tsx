import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Users, TrendingUp } from 'lucide-react';

const LinkedIn: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-8 md:mb-0">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                      UP
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Connect with Ujjwal
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Data & Marketing Strategist
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
                    Join my professional network and stay updated with the latest insights 
                    in data science, machine learning, and digital marketing strategies.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      <span>500+ Connections</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-2 text-purple-600" />
                      <span>Industry Insights</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <motion.a
                    href="https://www.linkedin.com/in/ujjwol-parajuli-3b9219317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 mr-3" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Click to view full profile
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Latest Posts
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Data insights & marketing trends
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Professional Updates
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Career milestones & achievements
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Industry Network
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect with like-minded professionals
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedIn;