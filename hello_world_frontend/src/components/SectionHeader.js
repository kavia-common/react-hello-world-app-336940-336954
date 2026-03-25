import React from 'react';
import './SectionHeader.css';

// PUBLIC_INTERFACE
const SectionHeader = ({ title, subtitle, children }) => {
  return (
    <div className="section-header">
      <div className="section-header__text">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && (
          <p className="section-header__subtitle">{subtitle}</p>
        )}
      </div>
      {children && (
        <div className="section-header__action">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
