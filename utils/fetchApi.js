import axios from 'axios'


export const baseUrl ='https://bayut.p.rapidapi.com'




export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '943bc63d40mshf9af56209caaea3p1c53e4jsn753cb43bb1c2'
        },
    });

    return data;
}
