import React, { useState } from 'react';
import './residentialPage.css';
import {InputNumber, Button} from 'antd';
import { Link } from 'react-router-dom';


export default function Residential()  {

    const [residentialOpts,setResidentialOpts] 
    = useState([
        {panelCount:18,unitPower:370,inverterPower:5},
        {panelCount:20,unitPower:330,inverterPower:5},
        {panelCount:36,unitPower:370,inverterPower:10},
        {panelCount:40,unitPower:330,inverterPower:10},
        {panelCount:54,unitPower:370,inverterPower:15},
        {panelCount:60,unitPower:330,inverterPower:15},
        {panelCount:108,unitPower:370,inverterPower:30},
        {panelCount:121,unitPower:330,inverterPower:30},
        {}
    ]);
    const [electricFee,setElectricFee] = useState(0);    
    const [displayOpts, setDisplayOpts] = useState([]);
    const onDisplayPlan = () => {
        let fee= electricFee;
        let feeRange = [300,600,900];
        let index=0;
        while(fee > feeRange[index]){
            index++;
        }
        setDisplayOpts( residentialOpts.slice(2*index,2*index+2));

    }


    return (
        <div class='residential'>
            <div>
                <h1>Tell us your seasonal Electric Charge</h1>     
                <InputNumber  min={0} max={1200} defaultValue={0} 
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    value={electricFee}
                    onChange={(e) => {setElectricFee(e)}} />   
                <br></br>*upper than $1200 may be applied for commercial plan<br></br><Button type='primary' onClick={onDisplayPlan}>See your plan</Button>
            </div>
            <div class='residential_table'>
                {displayOpts.map((item) => 
                    <div key={item.index} class='residential_opt'>
                        <h3>{item.panelCount * item.unitPower / 1000} kW 
                        ({item.panelCount} x {item.unitPower} W)</h3>
                        <p>with {item.inverterPower} kW inverter</p>
                        <p>All panels with your chosen!</p>
                        <Link to='/contact'>
                            <Button type='primary'>Start your solar life now!</Button>
                        </Link>
                    </div>
                )}                
            </div>                 
        </div>        
    );
}

