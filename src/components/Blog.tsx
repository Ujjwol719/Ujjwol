import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.article
          className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold">Featured Article</h3>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Ujjwal Parajuli</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 2024</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The Art of Data Analysis through Storytelling
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                In my journey as a data scientist and marketing strategist, I've discovered that the most powerful insights aren't just found in numbers—they're revealed through the stories those numbers tell. Data analysis isn't merely about statistical significance or correlation coefficients; it's about uncovering the human narratives hidden within datasets.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Every data point represents a decision, a behavior, or a moment in someone's life. When we approach analysis with this storytelling mindset, we transform cold statistics into compelling narratives that drive meaningful action. I've seen how a well-crafted data story can turn skeptical stakeholders into passionate advocates, and how the right visualization can make complex insights accessible to everyone.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The art lies in finding the balance between analytical rigor and narrative flow. We must be truthful to the data while making it emotionally resonant. This approach has revolutionized how I present findings—whether it's showing how customer behavior patterns reveal unmet needs, or how marketing campaign data tells the story of brand perception evolution.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 dark:text-gray-400 my-8">
                "Data is not just numbers; it's the voice of your customers, the pulse of your business, and the roadmap to your future. Our job is to listen, interpret, and translate that voice into actionable stories."
              </blockquote>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As we move forward in an increasingly data-driven world, the professionals who will thrive are those who can bridge the gap between technical analysis and human understanding. The future belongs to data storytellers—those who can make numbers sing, statistics dance, and insights inspire action.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                  UP
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ujjwol Parajuli</h4>
                  <p className="text-gray-600 dark:text-gray-400">Data & Marketing Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Blog;