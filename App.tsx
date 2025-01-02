import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchForm from './components/SearchForm';
import FavCityLists from './components/FavCityLists';

export default function App() {
  const [favCities, setFavCities] = useState<any>([]);

  const addFavCities = (city:string,temp:number) => {

    const newItem = {
      id:Math.floor(Math.random()*1000),
      city:city,
      temp:temp,
    }

    setFavCities([...favCities,newItem])
    console.log(favCities);
  }

  const removeFavCity = (id:number) => {
    const newFavCities = favCities.filter((item:any) => item.id !== id);
    setFavCities(newFavCities)
  }
  console.log(favCities);
   return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <SearchForm addCityFn={addFavCities} removeCityFn={removeFavCity} />
      <FavCityLists favCities={favCities} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
