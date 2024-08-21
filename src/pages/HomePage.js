import React from "react";
import './HomePage.css';

function HomePage(){
    return(
    <div className="homepage">
      <div className="income-expense">
        <span className="divider"></span> {/* 수직선 역할 */}
        <span className="expense">지출 금액<br/>100,000원</span>
        <span className="divider"></span> {/* 수직선 역할 */}
        <span className="income">수입 금액<br/>100,000원</span>
        <span className="divider"></span> {/* 수직선 역할 */}
      </div>
    </div>
    
    )
}

export default HomePage;