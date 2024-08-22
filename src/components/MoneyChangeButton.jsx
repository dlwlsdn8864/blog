import React from 'react';
import { Link } from 'react-router-dom';
import './MoneyChangeButton.css';

const MoneyChangeButton = ({ date, text, amount, type }) => {
  return (
    <button className={`custom-button ${type === 0 ? 'expense' : 'income'}`}>
      <div className="content">
        <div className="top-left">
          <div className="date">{date}</div>
          <div className="text">{text}</div>
        </div>
        <div className="bottom-right">
          <div className="amount">{amount}</div>
        </div>
      </div>
    </button>
  );
};

export default MoneyChangeButton;