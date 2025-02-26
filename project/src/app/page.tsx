import { AIChat } from '@/components/AIChat';
import { Education } from '@/components/Education';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <AIChat /> 
      </main>
    </div>
  );
}

export default App;