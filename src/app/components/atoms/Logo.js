import React from 'react';

export default function Logo({ dark }) {
  return (
    <h2 className={`logo-stolowka ${dark ? 'dark' : ''}`}>
      <span className="domain">stołówka</span>
      <span className="suffix">.NET</span>
    </h2>
  );
}
