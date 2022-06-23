import { Image, StyleSheet, Text, View } from "react-native";

const Header = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
          {restaurant.maxDeliveryTime} min
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    margin: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 15,
    color: "gray",
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
    left: 10,
  },
});

export default Header;
