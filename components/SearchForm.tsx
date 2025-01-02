import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import useFetchCityWheater from "../hooks/useFetchCityWeather"
import WeatherCard from "./WeatherCard"
import { CurrentWeatherType } from "../types/types"

const SearchForm = (props:any) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [inputError, setInputError] = useState("")
    const {data,loading,error,fetchCityWheater,resetData} = useFetchCityWheater();
    const [currentCityWeather, setCurrentCityWeather] = useState<null | CurrentWeatherType>(null)
 
  
    const handleSearchWeather = () => {
        console.log('test')
        console.log(inputValue)
        setInputError("")
        if(!inputValue){
            setInputError("Musisz wprowadzić miasto")
            resetData()
            return
        }
        fetchCityWheater(inputValue);
        setInputValue("")
        console.log(data);
    }

    console.log(data);
    return(
        <View>
            <TextInput value={inputValue} onChangeText={setInputValue} />
            {data!== null ? <WeatherCard data={data} addCityFn={props.addCityFn} /> : null}
            <Button title="Wyszukaj" onPress={handleSearchWeather} />
            {inputError ? <h3>{inputError}</h3> : null}
        </View>
    )
}

export default SearchForm