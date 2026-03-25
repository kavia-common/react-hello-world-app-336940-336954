import React, { useState } from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import GenreCard from '../components/GenreCard';
import DeviceCard from '../components/DeviceCard';
import FAQSection from '../components/FAQSection';
import PlanCard from '../components/PlanCard';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import NavArrows from '../components/NavArrows';
import { genres, devices, subscriptionPlans } from '../data/streamData';

/**
 * HomePage - The main landing page for StreamVibe.
 *
 * REQ: WM-8292 - Home hero value proposition section.
 * REQ: WM-8293 - Home category exploration section with genre cards.
 * REQ: WM-8294 - Home device compatibility section.
 * REQ: WM-8295 - Home FAQ accordion section with scroll-target id.
 * REQ: WM-8296 - Pricing plans section with Monthly/Yearly billing toggle.
 * REQ: WM-8291 - Active nav state: activePage="home".
 * REQ: WM-8291 - Sections have anchor IDs for in-page scroll from Navbar.
 *
 * @param {Object}   props
 * @param {Function} props.navigate - App-level navigation handler
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const HomePage = ({ navigate }) => {
  const [genrePage, setGenrePage] = useState(0);
  // REQ: WM-8296 - Monthly active by default
  const [billingCycle, setBillingCycle] = useState('monthly');

  const genresPerPage = 5;
  const totalGenrePages = Math.ceil(genres.length / genresPerPage);
  const visibleGenres = genres.slice(
    genrePage * genresPerPage,
    genrePage * genresPerPage + genresPerPage
  );

  return (
    <div className="home-page">
      {/* Hero */}
      {/* REQ: WM-8292 - Hero section with Start Watching Now CTA */}
      <div className="home-page__hero-wrapper">
        <Navbar activePage="home" navigate={navigate} />
        <HeroSection navigate={navigate} />
      </div>

      {/* Genres Section */}
      {/* REQ: WM-8293 - Category exploration: Action, Adventure, Comedy, Drama, Horror */}
      <section className="home-page__section">
        <SectionHeader
          title="Explore our wide variety of categories"
          subtitle="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        >
          <NavArrows
            onPrev={() => setGenrePage(p => Math.max(0, p - 1))}
            onNext={() => setGenrePage(p => Math.min(totalGenrePages - 1, p + 1))}
            total={totalGenrePages}
            current={genrePage}
          />
        </SectionHeader>
        <div className="home-page__genre-grid">
          {visibleGenres.map((genre) => (
            <GenreCard key={genre.name} genre={genre} />
          ))}
        </div>
      </section>

      {/* Devices Section */}
      {/* REQ: WM-8294 - Device cards: Smartphones, Tablet, Smart TV, Laptops, Gaming Consoles, VR Headsets */}
      <section className="home-page__section">
        <SectionHeader
          title="We Provide you streaming experience across various devices."
          subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className="home-page__devices-grid">
          <div className="home-page__devices-row">
            {devices.slice(0, 3).map((device) => (
              <DeviceCard key={device.name} device={device} />
            ))}
          </div>
          <div className="home-page__devices-row">
            {devices.slice(3, 6).map((device) => (
              <DeviceCard key={device.name} device={device} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* REQ: WM-8295 - FAQ accordion; section id set inside FAQSection component */}
      <section className="home-page__section">
        <FAQSection />
      </section>

      {/* Subscription Plans */}
      {/*
        REQ: WM-8296 - Pricing section with Monthly/Yearly tabs, plan cards.
        REQ: WM-8291 - id="subscriptions-section" for scroll-target from Navbar 'Subscriptions' click.
      */}
      <section className="home-page__section" id="subscriptions-section">
        <SectionHeader
          title="Choose the plan that's right for you"
          subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        >
          <div className="home-page__billing-tabs">
            {/* REQ: WM-8296 - Monthly active by default */}
            <button
              className={`home-page__billing-tab ${billingCycle === 'monthly' ? 'home-page__billing-tab--active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`home-page__billing-tab ${billingCycle === 'yearly' ? 'home-page__billing-tab--active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
          </div>
        </SectionHeader>
        <div className="home-page__plans-grid">
          {subscriptionPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isPopular={plan.isPopular}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      {/* REQ: WM-8300 - CTA with "Start a Free Trail" typo preserved */}
      <section className="home-page__cta-section">
        <CTABanner />
      </section>

      {/* Footer */}
      {/* REQ: WM-8300 - Footer with "Gernes" typo and "@2023 streamvib" copyright */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default HomePage;
