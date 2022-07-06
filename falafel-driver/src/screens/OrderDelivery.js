import { useRef, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from "../../assets/data/orders.json";

const order = orders[0];

const OrderDelivery = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeText}>14 min</Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.routeText}>5 km</Text>
        </View>
        <View style={styles.deliveryDetailsContainer}>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
          <View style={styles.addressContainer}>
            <Fontisto name="shopping-store" size={22} color="gray" />
            <Text style={styles.addressText}>{order.Restaurant.address}</Text>
          </View>
          <View style={styles.addressContainer}>
            <FontAwesome5
              name="map-marker-alt"
              size={22}
              color="gray"
              style={{ marginLeft: 4 }}
            />
            <Text style={styles.userAddressText}>{order.User.address}</Text>
          </View>
          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderItemText}>Falafel x1</Text>
            <Text style={styles.orderItemText}>Pizza x2</Text>
            <Text style={styles.orderItemText}>Coke x1</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Accept Order</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  handleIndicator: {
    backgroundColor: "grey",
    width: 100,
  },
  handleIndicatorContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  routeText: {
    fontSize: 25,
    letterSpacing: 1,
  },
  deliveryDetailsContainer: {
    paddingHorizontal: 20,
  },
  restaurantName: {
    fontSize: 25,
    letterSpacing: 1,
    paddingVertical: 20,
  },
  addressContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  addressText: {
    fontSize: 20,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 15,
  },
  userAddressText: {
    fontSize: 20,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 20,
  },
  orderDetailsContainer: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 20,
  },
  orderItemText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#3FC060",
    marginTop: "auto",
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    paddingVertical: 15,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

export default OrderDelivery;
