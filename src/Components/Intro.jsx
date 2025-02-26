import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

// AccordionItem component to display each FAQ
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none hover:cursor-pointer"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-gray-300 text-left">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-[url('./../public/introBack.webp')] md:bg-center bg-no-repeat text-white relative p-2">
      <div className="my-20 flex flex-col items-center">
        {/* Main content with a fade-in animation */}
        <motion.main
          className="max-w-2xl text-center mt-10 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl md:text-5xl font-bold transition duration-300 ease-in-out hover:scale-105 mb-4 md:mb-1">
            Skill<span className='text-purple-300'>Cascade</span>
          </h1>
          <div className="flex flex-col items-center text-lg text-center p-2 md:p-4">
            <div className="text-center pb-4 text-[15px] md:text-lg md:font-semibold opacity-80">
              <p>SkillCascade transforms learning into creation.</p>
              <p>Connect with visionaries to ignite innovation.</p>
              <p>Build your future—one idea at a time.</p>
            </div>
            <button
              className="flex items-center mt-2 gap-2 bg-black border border-purple-500 text-white hover:bg-transparent hover:text-purple-200 font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Create Account <FaExternalLinkAlt />
            </button>
          </div>
        {/* Accordions Section */}
        <section className="mt-12 max-w-3xl w-full bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-200">Frequently Asked Questions</h2>

          <AccordionItem
            title="What is SkillCascade and how does it redefine career growth?"
            content="SkillCascade is an innovative platform that empowers individuals by merging dynamic learning experiences with personalized career development opportunities, bridging the gap between talent and success."
          />

          <AccordionItem
            title="How does SkillCascade integrate technology with professional development?"
            content="By harnessing advanced algorithms and community insights, SkillCascade curates interactive learning modules that equip professionals to excel in a rapidly evolving job market."
          />

          <AccordionItem
            title="Why is SkillCascade the future of skill enhancement?"
            content="With tailored learning paths, real-time feedback, and a collaborative ecosystem, SkillCascade transforms traditional career development into an immersive journey toward excellence."
          />
        </section>
        </motion.main>

        
      </div>
      <p className="text-sm text-gray-400 text-center">© 2025 SkillCascade. All rights reserved.</p>
    </div>
  );
};

export default IntroPage;
