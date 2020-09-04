import React,{useState,useEffect} from 'react';
import styles from './RightComponent.module.css'



import {fetchData} from '../../api/index';
import SelectCountry from './Country/SelectCountry'
import Map from './Map/Map'



import Cases from './Cases/Cases';
import Chart from './Charts/Chart';

function RightComponent() {

    const [data, setData] = useState([])
    const [country, setCountry] = useState('');
    const [location,setLocation] = useState([])

    useEffect( () => {
        const getData = async () => {
            const data = await fetchData()
            setData(data)
        }
        getData()
    },[])

    const handleCountryChange = async (country) => {
        const data = await fetchData(country);
        

        
        if(country ===''||null||undefined){
            const data = await fetchData();
            setData(data)
        }
        else{
            setData(data)
            setCountry(country)
        }
        
    }
    const Refresh = () => {
        window.location.reload()
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
                <h1 className={styles.title}>Analytics</h1>
                <div className={styles.select} >
                    < SelectCountry  handleCountryChange={handleCountryChange}/>
                    <div className={styles.calender}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path fillRule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                            <path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                    <div className={styles.refresh} onClick={Refresh} >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"/>
                            <path fillRule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"/>
                        </svg>
                    </div>
                </div>
                
            </div>
            <div className={styles.container__upper}>
                <div className={styles.cards}>
                    <Cases data={data} />
                </div>
                <div className={styles.chart}>
                    <Chart data = {data}
                    country={country} />  
                </div>
                
                
            </div>

            <div className={styles.container__lower}>
                <div className={styles.lower__title}>
                
                </div>
               <div className={styles.bottom}>
                    <div className={styles.lower__left}>
                        <Map data={location} />
                    </div>
                    <div className={styles.lower__right} ></div>
               </div>
            
            </div>
        </div>
    )
}

export default RightComponent;
