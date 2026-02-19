import React, { useState } from "react";

const faqs = [
  { question: "What is PracAI?", answer: "PracAI is a platform that makes Artificial Intelligence fun, accessible, and meaningful for learners." },
  { question: "How do I get started with PracAI?", answer: "You can sign up for a free trial and explore our interactive courses." },
  { question: "What age group is PracAI suitable for?", answer: "PracAI is designed for kids aged 12 and up, but anyone curious about AI can join." },
  { question: "Do you offer group subscription?", answer: "Yes, we provide group and institutional subscriptions for schools and organizations." },
  { question: "What support options are available?", answer: "We offer email support, community forums, and live chat for premium users." },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
return (
    <section className="bg-[rgba(13,13,18,1)] px-6 md:px-20 py-24">
      
      <div className="text-center mb-16">
        <h2 className="    font-['DM_Sans'] 
      text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] 
      font-medium 
      leading-[36px] sm:leading-[38px] md:leading-[42px] lg:leading-[46px] 
      tracking-normal
">
          <span className="bg-gradient-to-r from-[rgba(113,218,43,1)] to-[rgba(31,210,255,1)] text-transparent bg-clip-text">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </h2>
        <p className="  font-['Baloo_2'] 
      text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] 
      leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[57.6px] 
      font-semibold 
      tracking-[-0.026em] 
      text-[rgba(242,245,252,1)] 
      text-center 
      w-full px-4 mt-4
">
          Got Questions?
        </p>
      </div>

     
      <div className="flex flex-col gap-6 max-w-[1280px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[rgba(242,245,252,0.05)] rounded-lg shadow-md  cursor-pointer transition hover:bg-[rgba(242,245,252,0.1)]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex gap-4 items-center border-[rgba(31,210,255,1)] border-1 rounded-[12px] h-[64px]  sm:w-full">
                <span className="text-yellow-400 text-2xl font-bold px-4">
                {openIndex === index ? "−" : "+"}
              </span>
              <h3 className="font-['Inter'] text-[16px] md:text-[24px] text-[rgba(250,250,250,1)] font-semibold tracking-[-0.02em]">
                {faq.question}
              </h3>
              
            </div>
 {openIndex === index && (
              <p className="mt-4 text-[rgba(242,245,252,0.7)] font-['DM_Sans'] text-[16px] md:text-[18px] leading-relaxed px-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      
      <div className="text-center mt-16 pt-[70.6px] pr-[40px] bg-[rgba(15,28,31,1)] rounded-[12px] h-[250px] w-full max-w-[1280px] mx-auto flex flex-col items-center gap-6 flex flex-col items-center justify-center min-w-[280px] h-[250px] max-h-[1260px] border-1 pr-[20px] pb-[71.61px] pl-[20px] gap-[23.99px] border-[rgba(28,42,46,1)] backdrop-blur-[100]">
        <p className="text-[rgba(250,250,250,0.7)] font-['DM_Sans'] text-[24px] font-bold font-[700] mb-6">
          Still got questions? We're happy to help
        </p>
        <button className="bg-[rgba(255,157,0,1)] text-[rgba(13,13,18,1)] px-8 py-4 rounded-[12px] shadow-md hover:bg-[rgba(255,157,0,0.8)] transition  font-['DM_Sans'] font-bold w-[190px] h-[46px] flow-horizontal text-h-[24px] text-[20px]  font-[500]  flex items-center justify-center">
          Contact Us
        </button>
      </div>
    </section>
  );
};


