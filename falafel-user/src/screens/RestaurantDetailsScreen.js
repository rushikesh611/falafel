import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, View } from "react-native";
import restaurants from "../../assets/data/restaurants.json";
import DishListItem from "../components/DishListItem";
import Header from "../components/Header";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
});

export default RestaurantDetailsScreen;
