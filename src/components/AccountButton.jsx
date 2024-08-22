import React from 'react';
import { Link } from 'react-router-dom';
import './AccountButton.css';

const AccountButton = ({ name, text, amount }) => {
  return (
    <button className="custom-button">
      <div className="content">
        <div className="top-left">
          <div className="name">{name}</div>
          <div className="text">{text}</div>
        </div>
        <div className="bottom-right">
          <div className="amount">{amount}원</div>
        </div>
      </div>
    </button>
  );
};

export default AccountButton;