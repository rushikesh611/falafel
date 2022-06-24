import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/screens/Basket";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
