import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Turning Data into Direction';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Data Visualization Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,300"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-blue-500 dark:text-blue-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M0,500 Q400,300 800,500 T1200,400"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-500 dark:text-purple-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Ujjwol
              {/* Sparkle Effect */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-1 h-1 bg-purple-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.span>
            
            <motion.span 
              className="text-gray-800 dark:text-gray-200 ml-5"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Parajuli
              {/* Floating Letter Animation */}
              <motion.span
                className="inline-block"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2,
                }}
              >
                i
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, currentColor 0%, transparent 50%, currentColor 100%)",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
              }}
            >
              Data & Marketing Strategist
            </motion.span>
          </motion.h2>

          <motion.div
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span 
              className="font-mono"
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {displayedText}
            </motion.span>
            <motion.span 
              className="animate-pulse"
              animate={{
                opacity: [1, 0, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/ujjwal-resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="w-5 h-5 mr-2 relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Download />
              </motion.div>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full opacity-0"
                whileHover={{
                  scale: [1, 1.5],
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10">Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Skill Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding: "2px" }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg w-full h-full" />
              </motion.div>
              
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Science</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Python, ML, Deep Learning</p>
              </motion.div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-4 right-4 w-1 h-1 bg-blue-600 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding: "2px" }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg w-full h-full" />
              </motion.div>
              
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Download className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Power BI, MySQL, Reporting</p>
              </motion.div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-4 right-4 w-1 h-1 bg-purple-600 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding: "2px" }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg w-full h-full" />
              </motion.div>
              
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Download className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Digital Strategy, Direction</p>
              </motion.div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-4 right-4 w-1 h-1 bg-green-600 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;