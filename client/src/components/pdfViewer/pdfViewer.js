import React, { useState } from 'react';
import {Link as Link} from 'react-router-dom';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// import "./pdfViewer.css";

// PDF files for panel supplier 
import Canadian370 from "../../assert/suppliers/Panels/Canadian Solar/Canadian_Solar-Datasheet-HiKu_CS3L-MS_BF_v5.59_AU.pdf";
import Canadian330 from "../../assert/suppliers/Panels/Canadian Solar/Canadian_Solar-Datasheet-KuPower_CS3K-MS_EN.pdf";
import Jinko370 from "../../assert/suppliers/Panels/Jinko/JKM350-370M-66HB-A1-EN-ForAUSCEC-1.pdf";
import Jinko330 from "../../assert/suppliers/Panels/Jinko/CheetahPerc-JKM310-330M-60-V-A2-EN.pdf";
import Longi from "../../assert/suppliers/Panels/Longi/longi_lr6_72hph_365_385w_v09__ds.pdf";
import Qcell from "../../assert/suppliers/Panels/Qcell/Hanwha_Q_CELLS_Data_sheet_QPLUS_L-G4.2_340-350_2018-03_Rev01_AU.pdf";
import Risen from "../../assert/suppliers/Panels/Risen/RSM144-6-370-390M-IEC26UL1500V-40mm-2019H1-3-EN.pdf";
import Seraphim370 from "../../assert/suppliers/Panels/Seraphim/SRP-(370-385)-BMA_EN.pdf";
import Seraphim330 from "../../assert/suppliers/Panels/Seraphim/SRP-(320-335)-BMB_158.75_EN_2019V2.0.pdf";
import Suntech370 from "../../assert/suppliers/Panels/Suntech/AU_HyPro_STP370S_VfhMC4_370_365_360_2G_1000V.pdf";
import Suntech330 from "../../assert/suppliers/Panels/Suntech/HyPro_STP330S_21_WfhmMC4_330_325_320_2G_1000V.pdf";
import Trina370 from "../../assert/suppliers/Panels/Trina/Trina Splitmax 365_370w 03 PS-M-0531 B Datasheet SPLITMAX_144_Mono Perc.pdf";
import Trina330 from "../../assert/suppliers/Panels/Trina/Trina-330W-Panel-Brochure.pdf";

// PDF files for inverter supplier
import Fronius from "../../assert/suppliers/Inverter/Fronius/SE_DS_Fronius_Primo_UL_EN_CA.pdf";
import Growatt6 from "../../assert/suppliers/Inverter/Growatt/growatt-2.5-6kw-TL-X.pdf";
import Growatt10 from "../../assert/suppliers/Inverter/Growatt/growatt-3p-10kw.pdf";
import SMAboy from "../../assert/suppliers/Inverter/SMA/SB30-50-DEN1708-V22web.pdf";
import SMAtripower from "../../assert/suppliers/Inverter/SMA/Sunny_Tripower_8000-17000TL_Datasheet.pdf";
import Solax from "../../assert/suppliers/Inverter/Solax/X1-Smart-Technical-Datasheet solax.pdf";
import Solis from "../../assert/suppliers/Inverter/Solis/solis.pdf";
import Solisnew from "../../assert/suppliers/Inverter/Solis/Solis_datasheet_3P5-20kW_4G_AUS-compressed071019.pdf";
import Sungrowkt from "../../assert/suppliers/Inverter/Sungrow/SG10KTL-MT_datasheet.pdf";
import Sungrowrt from "../../assert/suppliers/Inverter/Sungrow/Sungrow-SG5KTL-MT-Three-Phase-Gen-2-Inverter.pdf";

export default function PdfViewer(props)  {

    let id=props.match.params.id; 
    let fileUrl;
    
    
    switch (id) {
        case "canadian370":
            fileUrl=Canadian370;
            break;
        case "canadian330" :
            fileUrl=Canadian330;
            break;
        case "jinko370" :
            fileUrl=Jinko370;
            break;
        case "jinko330" :
            fileUrl=Jinko330;
            break;
        case "longi370" :
            fileUrl=Longi;
            break;
        case "qcell370" :
            fileUrl=Qcell;
            break;
        case "risen370" :
            fileUrl=Risen;
            break;
        case "seraphim370" :
            fileUrl=Seraphim370;
            break;
        case "seraphim330" :
            fileUrl=Seraphim330;
            break;
        case "suntech370" :
            fileUrl=Suntech370;
            break;
        case "suntech330" :
            fileUrl=Suntech330;
            break;
        case "trina370" :
            fileUrl=Trina370;
            break;
        case "trina330" :
            fileUrl=Trina330;
            break;
        case "fronius" :
            fileUrl=Fronius;
            break;
        case "growatt6" :
            fileUrl=Growatt6;
            break;
        case "growatt10" :
            fileUrl=Growatt10;
            break;
        case "smaboy" :
            fileUrl=SMAboy;
            break;
        case "smatripowerower" :
            fileUrl=SMAtripower;
            break;
        case "solax" :
            fileUrl=Solax;
            break;
        case "solisnew" :
            fileUrl=Solisnew;
            break;
        case "solis" :
            fileUrl=Solis;
            break;
        case "sungrowkt" :
            fileUrl=Sungrowkt;
            break;
        case "sungrowrt" :
            fileUrl=Sungrowrt;
            break;    
    }

    return (
        <div>
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div class="pdfblock">
                        <h1>PDF viewer</h1>
                        <p>{id}</p>
                        <Viewer fileUrl={fileUrl} /> 
                    </div>
                </Worker>
            </div>
        </div>        
    );
}