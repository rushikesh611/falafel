import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import OrderDelivery from "./src/screens/OrderDelivery";
import OrdersScreen from "./src/screens/OrdersScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <OrdersScreen /> */}
      <OrderDelivery />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 50,
  },
});
