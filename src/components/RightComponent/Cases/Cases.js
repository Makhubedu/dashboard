import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import styles from './Cases.module.css';
import CountUp from 'react-countup';

function Cases({data : { confirmed, recovered, deaths,  lastUpdate }}) {
    if(!confirmed){
         return(<h1>Loading ...</h1>)
    }
    return (
        <div className={styles.container}>
            <div className={styles.container__card}>
                <Card className={styles.card}>
                    <CardContent>
                         <div className={styles.intro} >
                            <Typography className={styles.textNormals}>Confirmed</Typography>
                            <div>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                </svg>
                            </div>
                        </div>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                            />
                        </h2>
                        <Typography className={styles.textNormaly} >{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.container__card}>
                <Card className={styles.card}>
                    <CardContent>
                        
                        <div className={styles.intro} >
                            <Typography className={styles.textNormals}>Recovered</Typography>
                            <div>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"/>
                            <path fillRule="evenodd" d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"/>
                            </svg>
                            </div>
                        </div>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","/>
                        </h2>
                        <Typography className={styles.textNormal}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.container__card}>
                <Card className={styles.card}>
                    <CardContent>
                    <div className={styles.intro} >
                            <Typography className={styles.textNormals}>Deaths</Typography>
                            <div>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-peace" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                </svg>
                            </div>
                        </div>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","/>

                        </h2>
                        <Typography className={styles.textDeath}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>            
        </div>         
    
    )
}


export default Cases
