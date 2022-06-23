import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = ({ restaurants }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurants.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurants.name}</Text>
          <Text style={styles.subtitle}>
            $ {restaurants.deliveryFee} &#8226; {restaurants.minDeliveryTime} -
            {restaurants.maxDeliveryTime} min
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurants.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default RestaurantItem;
