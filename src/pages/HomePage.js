import React from "react";
import './HomePage.css';
import { useState } from 'react';
import '../index.css';

function HomePage(){
  let [지출, 지출변경] = useState(100000);
  let [수입, 수입변경] = useState(200000);
    return(
    <div className="page">
      <div className="income-expense">
        <span className="divider"></span> {/* 수직선 역할 */}
        <span className="expense">지출 금액<br/>{지출}원</span>
        <span className="divider"></span> {/* 수직선 역할 */}
        <span className="income">수입 금액<br/>{수입}원</span>
        <span className="divider"></span> {/* 수직선 역할 */}
      </div>
    </div>
    
    )
}

export default HomePage;