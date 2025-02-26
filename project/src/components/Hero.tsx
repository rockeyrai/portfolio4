'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCog } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the Future with Code
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full-stack developer specializing in AI-powered web applications and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                View Projects
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          >
            <BrainCog className="w-64 h-64 text-indigo-600" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};