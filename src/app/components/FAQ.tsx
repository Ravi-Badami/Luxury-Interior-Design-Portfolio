'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is your design process timeline?',
    answer:
      'Our typical design process takes 8-12 weeks for a full home project, depending on the scope. This includes initial consultation, design development, revisions, and final implementation. We provide a detailed timeline during our initial consultation tailored to your specific project.'
  },
  {
    question: 'Do you work on projects outside your local area?',
    answer:
      'Yes, we take on select projects nationally and internationally. For projects outside our primary service area, we incorporate travel costs into the project budget and ensure adequate site visits to maintain our quality standards.'
  },
  {
    question: 'How do you charge for your services?',
    answer:
      "We offer flexible fee structures including flat fees, hourly rates, and percentage-based fees depending on the project scope. During our initial consultation, we'll discuss the best approach for your specific needs and provide a transparent proposal."
  },
  {
    question: 'Can I purchase my own furniture and materials?',
    answer:
      "While we typically handle all procurement to ensure quality and coordination, we can work with client-purchased items when discussed upfront. However, we cannot guarantee the same level of cohesion or provide warranties on items we don't source."
  },
  {
    question: 'What if I need changes during the project?',
    answer:
      'We include a certain number of revision rounds in our packages. Additional changes can be accommodated and are billed according to our hourly rate. We always communicate costs upfront before implementing any changes.'
  },
  {
    question: 'Do you provide 3D renderings?',
    answer:
      'Yes, our Full Design Package and Luxury Turnkey options include photorealistic 3D renderings. This helps you visualize the final result before any construction or purchases begin. Additional renderings can be added to any package.'
  },
  {
    question: 'How involved will I be in the process?',
    answer:
      "We believe in collaborative design. You'll be involved in all major decisions through scheduled meetings and presentations. We handle the details and coordination, keeping you informed while respecting your time."
  },
  {
    question: 'What happens after project completion?',
    answer:
      "We provide a comprehensive handover including all documentation, warranties, and care instructions. Our support doesn't end at installation—we offer continued support and are available for any future design needs or adjustments."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='py-24 px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl tracking-wider mb-4'>FREQUENTLY ASKED QUESTIONS</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Everything you need to know about working with us
          </p>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-white border border-border overflow-hidden'>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors'>
                <span className='pr-8 tracking-wide'>{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className='flex-shrink-0' />
                ) : (
                  <Plus size={20} className='flex-shrink-0' />
                )}
              </button>
              {openIndex === index && (
                <div className='px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border bg-secondary/20'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
