import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dikshant Bhandari',
      role: 'Business Analyst',
      content: "Ujjwal's approach to data analysis doesn't just solve problems—it heals the soul of our business. His insights have transformed how we understand our customers, bringing clarity where there was confusion and hope where there was uncertainty.",
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dikshant&backgroundColor=b6e3f4,c0aede,d1d4f9&clothesColor=262e33,3c4f5c,5199e4&eyeType=default&facialHairType=default&hairColor=2c1b18,724133,a55728&mouthType=smile&skinColor=ae5d29,d08b5b,edb98a,f8d25c,fd9841,fdbcb4&topType=shortHairShortFlat'
    },
    {
      name: 'Krishal Karna',
      role: 'Marketing Director',
      content: "Working with Ujjwal is like having a mentor who genuinely cares about your growth. His passion for turning data into meaningful stories uplifts our entire team and motivates us to see beyond numbers to the human stories they tell.",
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Krishal&backgroundColor=b6e3f4,c0aede,d1d4f9&clothesColor=262e33,3c4f5c,5199e4&eyeType=happy&facialHairType=default&hairColor=2c1b18,724133,a55728&mouthType=smile&skinColor=ae5d29,d08b5b,edb98a,f8d25c,fd9841,fdbcb4&topType=shortHairShortCurly'
    },
    {
      name: 'Kripesh Dhungel',
      role: 'Data Scientist',
      content: "Ujjwal has this incredible ability to make complex data feel accessible and inspiring. His mentorship doesn't just improve our technical skills—it heals our relationship with data, making us see it as a tool for positive change rather than just numbers on a screen.",
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kripesh&backgroundColor=b6e3f4,c0aede,d1d4f9&clothesColor=262e33,3c4f5c,5199e4&eyeType=default&facialHairType=beardMedium&hairColor=2c1b18,724133,a55728&mouthType=smile&skinColor=ae5d29,d08b5b,edb98a,f8d25c,fd9841,fdbcb4&topType=shortHairShortWaved'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What People <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;