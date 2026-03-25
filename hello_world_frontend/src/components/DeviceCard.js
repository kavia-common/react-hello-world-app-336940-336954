import React from 'react';
import './DeviceCard.css';

const DeviceIcons = {
  smartphone: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#E50000" strokeWidth="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  tablet: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" stroke="#E50000" strokeWidth="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  tv: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E50000" strokeWidth="2"/>
      <path d="M8 21H16M12 17V21" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  laptop: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E50000" strokeWidth="2"/>
      <path d="M2 17H22" stroke="#E50000" strokeWidth="2"/>
      <path d="M8 21H16" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  gamepad: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="3" stroke="#E50000" strokeWidth="2"/>
      <path d="M8 12H12M10 10V14" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="12" r="1" fill="#E50000"/>
      <circle cx="14" cy="10" r="1" fill="#E50000"/>
    </svg>
  ),
  vr: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="10" rx="3" stroke="#E50000" strokeWidth="2"/>
      <circle cx="8" cy="12" r="2" stroke="#E50000" strokeWidth="2"/>
      <circle cx="16" cy="12" r="2" stroke="#E50000" strokeWidth="2"/>
      <path d="M10 12H14" stroke="#E50000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// PUBLIC_INTERFACE
const DeviceCard = ({ device }) => {
  return (
    <div className="device-card">
      <div className="device-card__icon">
        {DeviceIcons[device.iconType] || DeviceIcons.smartphone}
      </div>
      <div className="device-card__content">
        <h3 className="device-card__title">{device.name}</h3>
        <p className="device-card__desc">{device.description}</p>
      </div>
    </div>
  );
};

export default DeviceCard;
