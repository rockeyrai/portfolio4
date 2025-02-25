import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, achievements } from '../data';
import { GraduationCap, Trophy } from 'lucide-react';

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-12">
              <GraduationCap className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div ref={ref} className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                  <p className="text-indigo-600 mb-2">{edu.degree}</p>
                  <p className="text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-12">
              <Trophy className="w-8 h-8 text-indigo-600 mr-4" />
              <h2 className="text-4xl font-bold">Achievements</h2>
            </div>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-500 mb-2">{achievement.year}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};