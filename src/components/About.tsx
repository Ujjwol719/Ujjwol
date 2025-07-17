import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Brain, Quote } from 'lucide-react';

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
          {/* Left Column - Profile Image and Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center space-y-8"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src="/ujjwal.jpg"
                  alt="Ujjwol Parajuli"
                  className="w-full h-full object-cover"
                />
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-br from-blue-500/50 to-purple-500/50 animate-pulse"></div>
              </div>
            </div>

            {/* Inspirational Quote */}
            <motion.div
              className="relative z-10 max-w-md mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3 mx-auto opacity-70" />
              <blockquote className="text-center">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 leading-relaxed italic">
                  "Connecting data with purpose, transforming insights into impact"
                </p>
                <footer className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  — Ujjwol Parajuli
                </footer>
              </blockquote>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
          </motion.div>

          {/* Right Column - All Content */}
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
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic font-[cursive]">
                I'm a passionate Data & Marketing Strategist with a unique blend of technical expertise and creative marketing vision. With deep knowledge in machine learning, data analysis, and digital marketing, I help businesses transform raw data into actionable strategies that drive growth.
                <br /><br />
                My journey spans from building sophisticated ML models to crafting compelling marketing campaigns, always with the goal of creating meaningful impact through data-driven decision making.
                <br /><br />
                I thrive on solving complex problems and love collaborating with diverse teams to deliver innovative solutions. My curiosity drives me to continuously learn and adapt to new technologies, ensuring my work remains at the forefront of industry trends. Whether it's uncovering insights from data or designing strategies that resonate, I am dedicated to making a measurable difference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;