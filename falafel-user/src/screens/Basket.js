import { FlatList, StyleSheet, Text, View } from "react-native";
import restaurants from "../../assets/data/restaurants.json";
import BasketDishItem from "../components/BasketDishItem";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
        Your items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Place Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default Basket;
