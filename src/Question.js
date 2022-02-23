import React, { useState } from 'react';
const Question = ({ title, info }) => {
  const [showInfo, SetShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => SetShowInfo(!showInfo)}>
          {showInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-minus"
            >
              <line x1="8" y1="12" x2="17" y2="12"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          )}
        </button>
      </header>
      {showInfo && <p className="info">{info}</p>}
    </article>
  );
};

export default Question;
