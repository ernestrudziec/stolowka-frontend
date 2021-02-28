import React from 'react';
import { useHistory } from 'react-router';

export default function Logo({ dark }) {
  const history = useHistory();

  return (
    <h2 onClick={() => history.push('/')} className={`logo-stolowka ${dark ? 'dark' : ''}`}>
      <span className="domain">stołówka</span>
      <span className="suffix">.NET</span>
    </h2>
  );
}
