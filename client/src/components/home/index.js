import { Button, Popover } from 'antd';
import PDF from 'react-pdf-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import { 
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    WechatOutlined,
    WeiboOutlined
} from '@ant-design/icons'

import Logo_Canadian from '../../assert/suppliers/Panels/Canadian Solar/logo.png';
import Logo_Jinko from '../../assert/suppliers/Panels/Jinko/logo.png';
import Logo_Longi from '../../assert/suppliers/Panels/Longi/logo.png';
import Logo_Qcell from '../../assert/suppliers/Panels/Qcell/logo.png';
import Logo_Risen from '../../assert/suppliers/Panels/Risen/logo.png';
import Logo_Seraphim from '../../assert/suppliers/Panels/Seraphim/logo.png';
import Logo_Suntech from '../../assert/suppliers/Panels/Suntech/logo.png';
import Logo_Trina from '../../assert/suppliers/Panels/Trina/logo.png';

import Logo_Fronius from '../../assert/suppliers/Inverter/Fronius/logo.png';
import Logo_Growatt from '../../assert/suppliers/Inverter/Growatt/logo.png';
import Logo_SMA from '../../assert/suppliers/Inverter/SMA/logo.png';
import Logo_Solax from '../../assert/suppliers/Inverter/Solax/logo.png';
import Logo_Solis from '../../assert/suppliers/Inverter/Solis/logo.png';
import Logo_Sungrow from '../../assert/suppliers/Inverter/Sungrow/logo.png';

export default function Home()  {
    const panelOpts_Canadian=(
        <div>
            <Link target="_blank" to="/pdfviewer/canadian370"><p>HiKu_CS3L</p></Link>
            <Link target="_blank" to="/pdfviewer/canadian330"><p>KuPower_CS3K</p></Link>
        </div>
    );
    const panelOpts_Jinko=(
        <div>
            <Link target="_blank" to="/pdfviewer/jinko370"><p>JKM350-370M</p></Link>
            <Link target="_blank" to="/pdfviewer/jinko330"><p>JKM310-330M</p></Link>
        </div>
    );
    const panelOpts_Longi=(
        <div>
            <Link target="_blank" to="/pdfviewer/longi370"><p>longi_lr6_72hph</p></Link>
        </div>
    );
    const panelOpts_Qcell=(
        <div>
            <Link target="_blank" to="/pdfviewer/qcell370"><p>QPLUS_L-G4.2</p></Link>
        </div>
    );
    const panelOpts_Risen=(
        <div>
            <Link target="_blank" to="/pdfviewer/risen370"><p>RSM144-6</p></Link>
        </div>
    );
    const panelOpts_Seraphim=(
        <div>
            <Link target="_blank" to="/pdfviewer/seraphim370"><p>BMA</p></Link>
            <Link target="_blank" to="/pdfviewer/seraphim330"><p>BMB</p></Link>
        </div>
    );
    const panelOpts_Suntech=(
        <div>
            <Link target="_blank" to="/pdfviewer/suntech370"><p>STP370S_VfhMC4</p></Link>
            <Link target="_blank" to="/pdfviewer/suntech330"><p>STP330S_21_WfhmMC4</p></Link>
        </div>
    );
    const panelOpts_Trina=(
        <div>
            <Link target="_blank" to="/pdfviewer/trina370"><p>370W</p></Link>
            <Link target="_blank" to="/pdfviewer/trina330"><p>330W</p></Link>
        </div>
    );
    const inverterOpts_Fronius=(
        <div>
            <Link target="_blank" to="/pdfviewer/fronius"><p>Fronius Primo</p></Link>
        </div>
    );
    const inverterOpts_Growatt=(
        <div>
            <Link target="_blank" to="/pdfviewer/growatt6"><p>2500~6000TL-X</p></Link>
            <Link target="_blank" to="/pdfviewer/growatt10"><p>10000~15000TL3-S</p></Link>
        </div>
    );
    const inverterOpts_SMA=(
        <div>
            <Link target="_blank" to="/pdfviewer/smaboy"><p>Sunny Boy</p></Link>
            <Link target="_blank" to="/pdfviewer/smatripower"><p>Sunny Tripower</p></Link>
        </div>
    );
    const inverterOpts_Solax=(
        <div>
            <Link target="_blank" to="/pdfviewer/solax"><p>X1-Smart</p></Link>
        </div>
    );
    const inverterOpts_Solis=(
        <div>
            <Link target="_blank" to="/pdfviewer/solisnew"><p>3P-4G (new)</p></Link>
            <Link target="_blank" to="/pdfviewer/solis"><p>3P-4G</p></Link>
        </div>
    );
    const inverterOpts_Sungrow=(
        <div>
            <Link target="_blank" to="/pdfviewer/sungrowkt"><p>SG10KTL-MT</p></Link>
            <Link target="_blank" to="/pdfviewer/sungrowrt"><p>SG RT series</p></Link>
        </div>
    );

    return (
        <div class='home'>
            <div id='home_part1' class='home_section'>
                <h1>Find Your Future Energy</h1>
                <Link to='/contact'><Button type='primary' >Contact Us</Button></Link>
            </div>   
            <div id='home_part2' class='home_section'>
                <h1>On Your Choice</h1>                
                <div id='home_part2_content'>
                    <div>
                        <h2>Residential Solar</h2>  
                        <p>Help you make your bill 0, using Tier 1 panels and CEC approved inverter</p>                  
                        <p>With multiple choices from 6.66 kW to 40 kW</p>
                        <Link to='/residential'><Button type='primary'  >Learn More</Button></Link>
                    </div>
                    <div>
                        <h2>Commercial Solar</h2>  
                        <p>If you’re running a large warehouse, an office complex, or something else entirely a 50KW solar power system is big enough to meet the demands of most medium-large commercial operations across Australia.</p>
                        <Link to='/commercial'><Button type='primary'  >Learn More</Button></Link>                  
                    </div>
                </div>             
            </div>   
            <div id='home_part3' class='home_section'>
                <h1>Our Customers say:</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X8aMjjKLv2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>      
            <div id='home_part4' class='home_section'>
                <h1>Main Panels We Install</h1>
                <div class='supplier_list'>
                    <div><Popover content={panelOpts_Canadian}><img src={Logo_Canadian} /></Popover></div>
                    <div><Popover content={panelOpts_Jinko}><img src={Logo_Jinko} /></Popover></div>
                    <div><Popover content={panelOpts_Longi}><img src={Logo_Longi} /></Popover></div>
                    <div><Popover content={panelOpts_Qcell}><img src={Logo_Qcell} /></Popover></div>
                    <div><Popover content={panelOpts_Risen}><img src={Logo_Risen} /></Popover></div>
                    <div><Popover content={panelOpts_Seraphim}><img src={Logo_Seraphim} /></Popover></div>
                    <div><Popover content={panelOpts_Suntech}><img src={Logo_Suntech} /></Popover></div>
                    <div><Popover content={panelOpts_Trina}><img src={Logo_Trina} /></Popover></div>
                </div>
            </div> 
            <div id='home_part5' class='home_section'>
                <h1>Main Inverter We Install</h1>
                <div class='supplier_list'>
                    <div><Popover content={inverterOpts_Fronius}><img src={Logo_Fronius} /></Popover></div>
                    <div><Popover content={inverterOpts_Growatt}><img src={Logo_Growatt} /></Popover></div>
                    <div><Popover content={inverterOpts_SMA}><img src={Logo_SMA} /></Popover></div>
                    <div><Popover content={inverterOpts_Solax}><img src={Logo_Solax} /></Popover></div>
                    <div><Popover content={inverterOpts_Solis}><img src={Logo_Solis} /></Popover></div>
                    <div><Popover content={inverterOpts_Sungrow}><img src={Logo_Sungrow} /></Popover></div>
                </div>
            </div>   
            <div id='home_part6' class='home_section' >
                <span><a href='https://www.google.com'><FacebookOutlined/></a></span>
                <span><TwitterOutlined /></span>
                <span><InstagramOutlined /></span>
                <span><YoutubeOutlined /></span>
                <span><LinkedinOutlined /></span>
                <span><WechatOutlined /></span>
                <span><WeiboOutlined /></span>
            </div>
        </div>        
    );
}

