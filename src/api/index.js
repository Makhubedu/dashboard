import axios from 'axios'

let url = "https://covid19.mathdro.id/api"
export const fetchData = async(country) => {
    if (country) {
        url = `https://covid19.mathdro.id/api/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        throw (err)
    }
}

export const fetchCountry = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }))
    } catch (error) {
        console.log(error)
    }

}