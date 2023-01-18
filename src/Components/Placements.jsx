import React from "react";
import PlacementsCards from "./PlacementsCards";
import { Container } from "react-bootstrap";
import { Row,Col } from 'react-bootstrap';
import './style.css'



function Placements(){
   
    return(
      <div>
      <div class="nn">
      <section class="text-center tk">
      <div class="title-section text-center about1">
          <h2>Placement Records</h2>
          <span></span>
        </div>
      <PlacementsCards year={'Year  (2021-2022)'}  src={'https://i.postimg.cc/QMfs5r9d/2021-22.png" alt="2021-22'} />
      <PlacementsCards year={'Year  (2020-2021)'}  src={'https://i.postimg.cc/hGDcfGGY/2020-21.png" alt="2020-21'}/>
      <PlacementsCards year={'Year  (2019-2020)'} src={'https://i.postimg.cc/g2PYbsbm/2019-2020.png" alt="2019-20'}/>
      <PlacementsCards year={'Year  (2018-2019)'} src={'https://i.postimg.cc/VNgsRCT1/2018-19.png" alt="2018-19" alt="anychart-4'} />
      
      </section>
      </div>
      <section class="text-center trends">
      <div class="title-section text-center mission1">
          <h2>Placement Trends</h2>
          <span></span>
        </div>
      <PlacementsCards year={'Total offers over the Past 5 Sessions'} src={'https://i.postimg.cc/7PMVxQSL/anychart-5.png'} />
      <PlacementsCards year={'Average CTC and No of Companies Participated'} src={'https://i.postimg.cc/L87kCdFx/anychart-6.png" alt="anychart-6'} /> 
      </section>
      </div>
    );
}

export default Placements;