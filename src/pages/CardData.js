import React from 'react'
import CountUp from 'react-countup';

const CardData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
      }
    
    console.log(confirmed);
    return (
        <div>
             <div className="row m4 ">
                            <div className="card-panel colorblue">
                            <h6 className="grey-text bold">Infected</h6>
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                            <p className="grey-text">{new Date(lastUpdate).toDateString()}</p>
                            <p>Number of infected cases of COVID-19</p>
                            </div>
                        </div>

                        <div className="row m4">
                            <div className="card-panel colorgreen">
                                    <h6 className="grey-text bold">Recovered</h6>
                                    <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                                    <p className="grey-text">{new Date(lastUpdate).toDateString()}</p>
                                    <p>Number of recoveries from COVID-19</p>
                            </div>
                        </div>

                <div className="row m4">
                    <div className="card-panel colorred">
                        <h6 className="grey-text bold">Deaths</h6> 
                        <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                        <p className="grey-text">{new Date(lastUpdate).toDateString()}</p>
                        <p>Number of deaths caused by COVID-19</p>
                    </div>
                </div>
        </div>
    )
}

export default CardData
