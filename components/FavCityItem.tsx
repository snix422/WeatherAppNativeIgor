import { Text, View } from "react-native"

const FavCityItem = (props:any) => {
    return(
        <View>
            <Text>{props.data.city}</Text>
            <Text>{props.data.temp}</Text>
            <Text>{props.data.description}</Text>
        </View>
    )
}

export default FavCityItem