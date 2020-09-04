import React, {useState, useEffect} from 'react'
import { fetchCountry} from '../../../api/index'
import {FormControl, NativeSelect , Select} from '@material-ui/core'

import styles from './SelectCountry.module.css'


function CountrySelector( {handleCountryChange}) {

    const [ countries, setCountries] = useState([])

    useEffect( () => {
        const fetchAPICountry = async () => {
            setCountries(await fetchCountry())
        } 
        fetchAPICountry()
    }, [])
    return (
        <div className={styles.selectForm}>
            <FormControl className={styles.selectSize}>
            <Select
                className={styles.selectSize}
                native
                inputProps={{
                    name: 'Global',
                    id: 'filled-age-native-simple',
                }}
                defaultChecked="" 
                onChange={(e) =>  handleCountryChange(e.target.value)} 
            >
                    <option value="">Global</option>
                    {countries.map( (country,i) => (
                        <option key={i} value={country}>{country}</option>
                    ))}                   
                </Select>
            </FormControl>
        </div>
    )
}

export default CountrySelector