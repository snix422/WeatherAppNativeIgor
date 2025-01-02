import { useState } from "react";

//83a4e536c6cc9f7b61410fa93df99220
const ApiKey = "83a4e536c6cc9f7b61410fa93df99220";
const baseURL="https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pl";
const useFetchCityWheater = ()=>{

const [data, setData]=useState<null | []>(null);

const [loading, seLtLoading]=useState(false);

const [error, setError]=useState<null | string>("");
const fetchCityWheater= async(city:string)=>{
    if(!city.trim()){
        setError("Wpisz nazwę miasta poprawnie")
    }

    seLtLoading(true);

    setData(null);

    setError(null);

    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang=pl`);
    
        if(!res.ok){
            setError("Wpisz nazwę miasta poprawnie")
            return;
        }
        const resoalt = await res.json();
        setData(resoalt);

    }
    catch(error){
        setError("Wystąpił błąd podczas wyszukiwania")
        
    }
    finally{
        seLtLoading(false);

    }
}

const resetData = () => {
    setData(null)
}
    return{data, loading, error, fetchCityWheater,resetData}

}
export default useFetchCityWheater;