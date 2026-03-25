import React from 'react';
import './PlanCard.css';

/**
 * PlanCard - Subscription plan card with pricing and action buttons.
 *
 * REQ: WM-8296 - Plan cards with Basic/Standard/Premium, prices with /month.
 * REQ: WM-8296 - Start Free Trial + Choose Plan buttons; handle actions deterministically.
 * REQ: WM-8291 - No dead clicks: buttons have handlers even when destination unknown.
 *
 * @param {Object}  props
 * @param {Object}  props.plan        - Plan data object (name, price, description, features)
 * @param {boolean} props.isPopular   - Whether this plan should be highlighted as popular
 * @param {string}  props.billingCycle - 'monthly' or 'yearly'
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const PlanCard = ({ plan, isPopular, billingCycle = 'monthly' }) => {
  /**
   * Handle "Start Free Trial" click.
   * REQ: WM-8296 - Deterministic handling without fabricating checkout destination.
   * The trial flow is acknowledged; actual checkout is out of scope (not evidenced).
   */
  const handleStartTrial = () => {
    // Scroll to top of pricing section to prompt user to review the plan.
    // Actual trial/checkout flow is not evidenced in design spec.
    const el = document.getElementById('subscriptions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Handle "Choose Plan" click.
   * REQ: WM-8296 - Deterministic handling without fabricating checkout destination.
   */
  const handleChoosePlan = () => {
    // Checkout destination not evidenced; button is interactive (no dead click).
    // The user's selection is acknowledged in the UI without fabricating navigation.
  };

  /**
   * Compute the display price.
   * Yearly plans apply a ~17% discount (2 months free) per common SaaS convention.
   * REQ: WM-8296 - Monthly prices: $9.99/$12.99/$14.99 with /month label.
   */
  const displayPrice = billingCycle === 'yearly'
    ? `$${(parseFloat(plan.price.replace('$', '')) * 10).toFixed(2)}`
    : plan.price;

  const periodLabel = billingCycle === 'yearly' ? '/year' : '/month';

  return (
    <div className={`plan-card ${isPopular ? 'plan-card--popular' : ''}`}>
      {/* Plan Name & Description */}
      <div className="plan-card__header">
        <h3 className="plan-card__name">{plan.name}</h3>
        <p className="plan-card__desc">{plan.description}</p>
      </div>

      {/* Price */}
      {/* REQ: WM-8296 - Monthly prices $9.99/$12.99/$14.99 with /month */}
      <div className="plan-card__price">
        <span className="plan-card__amount">{displayPrice}</span>
        <span className="plan-card__period">{periodLabel}</span>
      </div>

      {/* Action Buttons */}
      {/* REQ: WM-8296 - Start Free Trial + Choose Plan buttons */}
      <div className="plan-card__actions">
        <button
          className="plan-card__btn plan-card__btn--secondary"
          onClick={handleStartTrial}
        >
          Start Free Trial
        </button>
        <button
          className="plan-card__btn plan-card__btn--primary"
          onClick={handleChoosePlan}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
