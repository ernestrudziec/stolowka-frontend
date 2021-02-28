import React from 'react';

export default ({ isError, text }) => {
  if (isError) {
    return (
      <div className="error-box">
        <div className="tip">Wystąpił błąd</div>
        {text}
      </div>
    );
  } else return null;
};
