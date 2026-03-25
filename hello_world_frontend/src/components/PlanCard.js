import React from 'react';
import './PlanCard.css';

// PUBLIC_INTERFACE
const PlanCard = ({ plan, isPopular }) => {
  return (
    <div className={`plan-card ${isPopular ? 'plan-card--popular' : ''}`}>
      {/* Plan Name & Description */}
      <div className="plan-card__header">
        <h3 className="plan-card__name">{plan.name}</h3>
        <p className="plan-card__desc">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="plan-card__price">
        <span className="plan-card__amount">{plan.price}</span>
        <span className="plan-card__period">/month</span>
      </div>

      {/* Action Buttons */}
      <div className="plan-card__actions">
        <button className="plan-card__btn plan-card__btn--secondary">
          Start Free Trial
        </button>
        <button className="plan-card__btn plan-card__btn--primary">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
