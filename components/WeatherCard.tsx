import { View,Text,Image, StyleSheet, Button,Dimensions } from "react-native"

 const WeatherCard = (props:any) => {
    console.log(props,'props')
    return(
        <View style={styles.container}>
           <Text>Prognoza pogody</Text>
           <Text style={styles.cityName}>Miasto: {props.data.name}</Text>
           <Text>Temperatura: {Math.floor(props.data.main.temp)} °C</Text>
           <Image src={props.data.weather[0].icon} alt={props.data.name} />
           <Text>Państwo: {props.data.sys.country}</Text>
           <Button title="Dodaj do ulubionych" onPress={()=>props.addCityFn(props.data.name,props.data.main.temp)}/>
        </View>
    )
 }

 export default WeatherCard


 /*
  <Text>{props.data?.name}</Text>
            <Text>{props.data.main?.temp}</Text>
            <Image src={props.data?.weather[0].icon} />
            <Text>{props.data.sys?.country}</Text>
 */

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"5px",
        width:width * 0.4,
        height: height * 0.4
    },
    cityName:{
        color:"blue"
    }
}) 