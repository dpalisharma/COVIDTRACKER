import React,{useEffect,useState} from 'react'
import CountUp from 'react-countup';
import {fData} from '../api/index'
import Table from '../components/Table'

const India = () => {
    const [date, setDate] = useState('')
    const [total, setTotal] = useState('')
    const [discharged, setDischarged] = useState('')
    const [deaths, setDeaths] = useState('')
    const [reg, setReg] = useState([])
    const [loading, setLoading] = useState(true)

     useEffect(() => {
        async function fetchData(){
            const {lastRefreshed, regional, total, discharged,deaths}=await fData();
            setDeaths(deaths)
            setDischarged(discharged)
            setTotal(total)
            setDate(lastRefreshed)
            setReg(regional)
            setLoading(false)
        }
            fetchData()

    }, [])
    
    return (
        <div className='container'>
            <h6 className="grey-text bold margin center">COVID-19 India Status</h6>
            <div className="row">
                <div className="col m4 ">
                    <div className="card-panel colorblue">
                    <h6 className="grey-text bold">Infected</h6>
                    <CountUp start={0} end={total} duration={2.75} separator="," />
                    <p className="grey-text">{new Date(date).toDateString()}</p>
                    <p>Number of infected cases of COVID-19</p>
                    </div>
                   
                </div>
                <div className="col m4">
                <div className="card-panel colorgreen">
                   <h6 className="grey-text bold">Recovered</h6>
                     <CountUp start={0} end={discharged} duration={2.75} separator="," />
                     <p className="grey-text">{new Date(date).toDateString()}</p>
                     <p>Number of recoveries from COVID-19</p>
                    </div>
                </div>
                <div className="col m4">
                <div className="card-panel colorred">
                   <h6 className="grey-text bold">Deaths</h6> 
                    <CountUp start={0} end={deaths} duration={2.75} separator="," />
                    <p className="grey-text">{new Date(date).toDateString()} </p>
                    <p>Number of deaths caused by COVID-19</p>
                    </div>
                </div>
                
            </div>
            <h6 className="grey-text bold margin center">COVID-19 Statewise Status</h6>
            <Table reg={reg} loading={loading}/>
        </div>
    )
}

export default India
