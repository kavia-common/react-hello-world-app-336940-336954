import React, { useState } from 'react';
import './FAQSection.css';
import SectionHeader from './SectionHeader';

/**
 * FAQ data with exact questions per design.
 *
 * REQ: WM-8295 - 8 numbered items (01-08), open/close behavior with plus/minus icons.
 */
const faqData = [
  {
    id: 1,
    num: '01',
    question: 'What is StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand. We offer a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.',
  },
  {
    id: 2,
    num: '02',
    question: 'How much does StreamVibe cost?',
    answer: 'StreamVibe offers three subscription plans: Basic at $9.99/month, Standard at $12.99/month, and Premium at $14.99/month. Each plan offers different features and content access levels.',
  },
  {
    id: 3,
    num: '03',
    question: 'What content is available on StreamVibe?',
    answer: 'StreamVibe offers a wide range of content, including movies, TV shows, documentaries, and original content. We have content in various genres including Action, Adventure, Comedy, Drama, Horror, and more.',
  },
  {
    id: 4,
    num: '04',
    question: 'How can I watch StreamVibe?',
    answer: 'You can watch StreamVibe on any device with a web browser, including smartphones, tablets, laptops, and smart TVs. We also have dedicated apps for iOS and Android devices.',
  },
  {
    id: 5,
    num: '05',
    question: 'How do I sign up for StreamVibe?',
    answer: 'To sign up for StreamVibe, click the "Start Free Trial" button and follow the on-screen instructions. You will need to provide your email address and create a password to get started.',
  },
  {
    id: 6,
    num: '06',
    question: 'What is the StreamVibe free trial?',
    answer: 'The StreamVibe free trial gives you full access to our content library for 30 days at no charge. After the trial period ends, you will be automatically enrolled in the plan you selected during sign-up.',
  },
  {
    id: 7,
    num: '07',
    question: 'How do I contact StreamVibe customer support?',
    answer: 'You can contact StreamVibe customer support via email at support@streamvibe.com or through our live chat feature available on our website. We are available 24/7 to help you with any issues.',
  },
  {
    id: 8,
    num: '08',
    question: 'What are the StreamVibe payment methods?',
    answer: 'StreamVibe accepts all major credit and debit cards, PayPal, and other popular payment methods. All transactions are secured with industry-standard encryption.',
  },
];

/**
 * FAQSection - Accordion-style FAQ section with numbered items and plus/minus toggle icons.
 *
 * REQ: WM-8295 - Render FAQ section with heading/paragraph.
 * REQ: WM-8295 - 8 numbered items (01-08).
 * REQ: WM-8295 - Open/close behavior with plus/minus icons (not chevrons).
 * REQ: WM-8295 - Ask a Question CTA handled (outcome unknown → graceful no-op).
 * REQ: WM-8291 - Section has id="faq-section" for scroll-target from Navbar.
 */
// PUBLIC_INTERFACE
const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  /**
   * Toggle the open/close state of an FAQ item.
   * Clicking an already-open item closes it (accordion behavior).
   *
   * @param {number} id - The FAQ item id
   */
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  /**
   * Handle "Ask a Question" CTA click.
   * REQ: WM-8295 - Outcome unknown → click acknowledged, no fabricated destination.
   */
  const handleAskQuestion = () => {
    // Intentional no-op: destination not evidenced in design spec.
    // Click is acknowledged (button is interactive), but no navigation is fabricated.
  };

  const leftItems = faqData.slice(0, 4);
  const rightItems = faqData.slice(4, 8);

  /** Render a single FAQ accordion item with numbered label and plus/minus icon. */
  const renderFAQItem = (item) => (
    <div key={item.id}>
      <div
        className={`faq-item ${openId === item.id ? 'faq-item--open' : ''}`}
        onClick={() => toggleFAQ(item.id)}
        role="button"
        aria-expanded={openId === item.id}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(item.id)}
      >
        <div className="faq-item__header">
          {/* REQ: WM-8295 - Numbered label (01-08) */}
          <span className="faq-item__number">{item.num}</span>
          <span className="faq-item__question">{item.question}</span>
          {/* REQ: WM-8295 - Plus/minus icons (not chevrons) */}
          <button
            className="faq-item__toggle"
            aria-label={openId === item.id ? 'Close' : 'Open'}
            tabIndex={-1}
          >
            {openId === item.id ? (
              /* Minus icon when open */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="2" rx="1" fill="#E50000"/>
              </svg>
            ) : (
              /* Plus icon when closed */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
        {openId === item.id && (
          <p className="faq-item__answer">{item.answer}</p>
        )}
      </div>
      <div className="faq-divider" />
    </div>
  );

  return (
    /* REQ: WM-8291 - id="faq-section" for scroll-target from Navbar 'Support' click */
    <section className="faq-section" id="faq-section">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      >
        <button className="faq-section__ask-btn" onClick={handleAskQuestion}>
          Ask a Question
        </button>
      </SectionHeader>

      <div className="faq-section__grid">
        <div className="faq-section__column">
          {leftItems.map(renderFAQItem)}
        </div>
        <div className="faq-section__column">
          {rightItems.map(renderFAQItem)}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
