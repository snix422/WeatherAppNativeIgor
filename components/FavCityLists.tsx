import { View,Text } from "react-native"
import FavCityItem from "./FavCityItem"

const FavCityLists = (props:any) => {
    return(
        <View>
            {props.favCities ? <View>
                {props.favCities.map((i:any)=>{
                    return(
                        <FavCityItem data={i} />
                    )
                })}
            </View> : 
            <View><Text>Brak ulubionych miast</Text></View>}
        </View>
    )
}

export default FavCityLists