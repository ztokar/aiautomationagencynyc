'use client'

import { useState } from 'react'

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronIcon isOpen={isOpen} />
      </button>
      {/* Answer stays in the DOM for crawlability; collapsed with CSS */}
      <div
        className="faq-answer"
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          paddingBottom: isOpen ? '1.5rem' : '0',
          transition: 'max-height 0.25s ease, padding 0.25s ease',
        }}
      >
        {answer}
      </div>
    </div>
  )
}

export default function Faq({ items }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      {items.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  )
}
