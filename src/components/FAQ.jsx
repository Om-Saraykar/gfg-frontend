import React, { useState, useRef } from 'react';

const faqs = [
  {
    question: 'What is PyHack?',
    answer: 'PyHack is a beginner-friendly Python hackathon focused on solving real-world problems using Python.'
  },
  {
    question: 'Where will the workshops be held?',
    answer: 'The workshops will be held online via Zoom and will be recorded for later viewing.'
  },
  {
    question: 'What will I learn at PyHack?',
    answer: 'You will learn Python basics, problem-solving skills, and how to build projects using Python libraries.'
  },
  {
    question: 'Do I need prior Python experience?',
    answer: 'No prior Python experience is required. All levels are welcome, and workshops will cater to beginners.'
  },
  {
    question: 'How long is PyHack?',
    answer: 'PyHack is a weekend-long event with workshops and coding sessions over two days.'
  },
  {
    question: 'Will there be prizes?',
    answer: 'Yes, we have exciting prizes for winners, including free Python courses and certificates.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false); // Track if "Show More" was clicked
  const contentRef = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore); // Toggle showMore state
  };

  const faqsToDisplay = showMore ? faqs : faqs.slice(0, 4); // Show first 4 FAQs initially

  return (
    <section className="w-[90%] mx-auto p-4">
      <h2 className="sm:text-[72px] text-[50px] font-bold mb-6">FAQs</h2>
      <div className='w-full'>
        <div className="max-w-[860px] space-y-4 ml-auto">
          {faqsToDisplay.map((faq, index) => (
            <div key={index} className="px-4 bg-[#fafafa] dark:bg-[#2d2d2d] rounded-[12px]">
              <button
                className="w-full text-left py-4 text-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <p className='font-medium sm:text-[26px] text-[18px]'>{faq.question}</p>
                <p className='font-medium sm:text-[26px] text-[18px] text-[#008AFF] ml-2'>{activeIndex === index ? '-' : '+'}</p>
              </button>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                style={{
                  maxHeight: activeIndex === index ? contentRef.current[index]?.scrollHeight + 'px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                }}
              >
                <p className="py-4 text-gray-600 dark:text-[#e0e0e0] sm:text-[20px] text-[16px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="text-blue-500 flex justify-start mt-4">
            <button onClick={handleToggleShowMore} className="hover:underline text-[#008AFF] text-[16px]">
              {showMore ? 'Show Less ↑' : 'See More →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
