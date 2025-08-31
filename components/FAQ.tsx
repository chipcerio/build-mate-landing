'use client';

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How to become Partners?',
    answer:
      "The Px process is simple and collaborative. Reach out to us via phone, email, or to our social media accounts. We'll schedule you for Partner assessment.",
  },
  {
    question: 'How does the matching process work?',
    answer:
      'Our advanced algorithm matches service providers with clients based on skills, location, availability, and project requirements. We ensure the best fit for both parties.',
  },
  {
    question: 'What services are available on the platform?',
    answer:
      'We offer a wide range of services including cleaning, maintenance, renovations, event planning, technical support, and many more. New service categories are added regularly.',
  },
  {
    question: 'How do you ensure quality and safety?',
    answer:
      'All service providers undergo thorough background checks, skill verification, and customer reviews.',
  },
  {
    question: 'What are the payment terms?',
    answer:
      'Payments are processed securely through our platform. Service providers receive payment upon project completion, and clients can pay upfront or upon completion.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id='faq' className='section-padding bg-white'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Got any questions?</h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className='space-y-4'>
            {faqItems.map((item, index) => (
              <div key={index} className='bg-pickaxe-gray rounded-lg'>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-pickaxe-dark-gray transition-colors rounded-lg'>
                  <span className='font-medium text-gray-900'>{item.question}</span>
                  {openIndex === index ? (
                    <Minus className='w-5 h-5 text-gray-500' />
                  ) : (
                    <Plus className='w-5 h-5 text-gray-500' />
                  )}
                </button>

                {openIndex === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-gray-700 leading-relaxed'>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
