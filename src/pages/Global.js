import React,{useState , useEffect} from 'react'

import {fetchDataGlobal} from '../api/index'
import Chart from '../components/Charts'
import Picker from '../components/Picker'
import CardData from './CardData'

const Global = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(() => {
        async function fetchData(){
            const data=await fetchDataGlobal()
           setData(data)
        }
            fetchData()

    }, [])

    const handleCountryChange = async (country) => {
        const data = await fetchDataGlobal(country);
        setData(data);
        setCountry({ country: country });
      }

    return (
        <div className='container'>
          
            <div className="row">
                <div className="col global m3">
                    <h6 className="grey-text bold margin center">COVID-19 Global Status</h6>
                    <CardData data={data}/>   
            </div>
                
                <div className="col m9">
                <Picker handleCountryChange={handleCountryChange} />
                <Chart data={data} country={country} />
                </div>
            </div>
            
        </div>
    )
}

export default Global
