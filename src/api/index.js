import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fData= async()=> {
    const {data:{lastRefreshed,data:{regional,summary:{total,discharged,deaths}}}}=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
    return { lastRefreshed, regional, total, discharged,deaths };
 };

 export const fetchDataGlobal = async (country) => {
    let changeableUrl = url;
  
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };
  
  export const fetchDailyDataGlobal = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };
  
  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };