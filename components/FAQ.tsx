'use client'

import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Eligibility Criteria for Organizations',
    answer: 'The DHI process is simple and collaborative. It begins with a 15-min call to understand your goals and inspiration. We update you every two days through written messages or Zoom videos, depending on the topic, and am always available for a chat.'
  },
  {
    question: 'How does the matching process work?',
    answer: 'Our advanced algorithm matches service providers with clients based on skills, location, availability, and project requirements. We ensure the best fit for both parties.'
  },
  {
    question: 'What services are available on the platform?',
    answer: 'We offer a wide range of services including cleaning, maintenance, event planning, technical support, and many more. New service categories are added regularly.'
  },
  {
    question: 'How do you ensure quality and safety?',
    answer: 'All service providers undergo thorough background checks, skill verification, and customer reviews. We also provide insurance coverage for peace of mind.'
  },
  {
    question: 'What are the payment terms?',
    answer: 'Payments are processed securely through our platform. Service providers receive payment upon project completion, and clients can pay upfront or upon completion.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Vestibulum et el libero? Nunc elementum varius.
            </h2>
          </div>
          
          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-wokka-gray rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-wokka-dark-gray transition-colors rounded-lg"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 