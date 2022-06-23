import { FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurants={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
