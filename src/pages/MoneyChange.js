import React from "react";
import { useState } from 'react';
import './MoneyChange.css';
import MoneyChangeButton from "../components/MoneyChangeButton";
import FloatingButton from "../components/FloatingButton";
import '../index.css';


function MoneyChange(){
    let [지출, 지출변경] = useState(100000);
    let [수입, 수입변경] = useState(200000);
    return(
        <div className="page">
            <MoneyChangeButton date="2024-08-23" text="학사 1일 안내자 알바" amount="$100" type={1} />
            <MoneyChangeButton date="2024-08-24" text="집주인 월세" amount="$100" type={0}/>
            <FloatingButton />
        </div>
    )
}

export default MoneyChange;