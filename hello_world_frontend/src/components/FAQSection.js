import React, { useState } from 'react';
import './FAQSection.css';
import SectionHeader from './SectionHeader';

const faqData = [
  {
    id: 1,
    question: 'What is StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand. We offer a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.'
  },
  {
    id: 2,
    question: 'How much does StreamVibe cost?',
    answer: 'StreamVibe offers three subscription plans: Basic at $9.99/month, Standard at $12.99/month, and Premium at $14.99/month. Each plan offers different features and content access levels.'
  },
  {
    id: 3,
    question: 'What content is available on StreamVibe?',
    answer: 'StreamVibe offers a wide range of content, including movies, TV shows, documentaries, and original content. We have content in various genres including Action, Adventure, Comedy, Drama, Horror, and more.'
  },
  {
    id: 4,
    question: 'How can I watch StreamVibe?',
    answer: 'You can watch StreamVibe on any device with a web browser, including smartphones, tablets, laptops, and smart TVs. We also have dedicated apps for iOS and Android devices.'
  },
  {
    id: 5,
    question: 'How do I sign up for StreamVibe?',
    answer: 'To sign up for StreamVibe, click the "Start Free Trial" button and follow the on-screen instructions. You will need to provide your email address and create a password to get started.'
  },
  {
    id: 6,
    question: 'What is the StreamVibe free trial?',
    answer: 'The StreamVibe free trial gives you full access to our content library for 30 days at no charge. After the trial period ends, you will be automatically enrolled in the plan you selected during sign-up.'
  },
  {
    id: 7,
    question: 'How do I contact StreamVibe customer support?',
    answer: 'You can contact StreamVibe customer support via email at support@streamvibe.com or through our live chat feature available on our website. We are available 24/7 to help you with any issues.'
  },
  {
    id: 8,
    question: 'What are the StreamVibe payment methods?',
    answer: 'StreamVibe accepts all major credit and debit cards, PayPal, and other popular payment methods. All transactions are secured with industry-standard encryption.'
  },
];

// PUBLIC_INTERFACE
const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftItems = faqData.slice(0, 4);
  const rightItems = faqData.slice(4, 8);

  const renderFAQItem = (item) => (
    <div key={item.id}>
      <div
        className={`faq-item ${openId === item.id ? 'faq-item--open' : ''}`}
        onClick={() => toggleFAQ(item.id)}
      >
        <div className="faq-item__header">
          <span className="faq-item__question">{item.question}</span>
          <button className="faq-item__toggle" aria-label="Toggle">
            {openId === item.id ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 15L12 9L6 15" stroke="#E50000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    <section className="faq-section">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      >
        <button className="faq-section__ask-btn">Ask a Question</button>
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
