import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useOrderContext } from "../contexts/OrderContext";

const STATUS_TO_TITLE = {
  READY_FOR_PICKUP: "Accept Order",
  ACCEPTED: "Pick-Up Order",
  PICKED_UP: "Complete Delivery",
};

const BottomSheetDetails = (props) => {
  const { totalKm, totalMinutes, onAccepted } = props;
  const isDriverClose = totalKm <= 1;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);

  const { order, user, dishes, acceptOrder, completeOrder, pickUpOrder } =
    useOrderContext();

  const onButtonPressed = async () => {
    const { status } = order;
    if (status === "READY_FOR_PICKUP") {
      bottomSheetRef.current?.collapse();
      await acceptOrder();
      onAccepted();
    } else if (status === "ACCEPTED") {
      bottomSheetRef.current?.collapse();
      await pickUpOrder();
    } else if (status === "PICKED_UP") {
      await completeOrder();
      bottomSheetRef.current?.collapse();
      navigation.goBack();
    }
  };

  const isButtonDisabled = () => {
    const { status } = order;
    if (status === "READY_FOR_PICKUP") {
      return false;
    }
    if ((status === "ACCEPTED" || status === "PICKED_UP") && isDriverClose) {
      return false;
    }
    return true;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <View style={styles.handleIndicatorContainer}>
        <Text style={styles.routeText}>{totalMinutes.toFixed(0)} min</Text>
        <FontAwesome5
          name="shopping-bag"
          size={30}
          color="#3FC060"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.routeText}>{totalKm.toFixed(1)} km</Text>
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
          <Text style={styles.userAddressText}>{user.address}</Text>
        </View>
        <View style={styles.orderDetailsContainer}>
          {dishes?.map((dishItem) => (
            <Text style={styles.orderItemText} key={dishItem.id}>
              {dishItem.Dish.name} x{dishItem.quantity}
            </Text>
          ))}
        </View>
      </View>
      <Pressable
        style={{
          ...styles.buttonContainer,
          backgroundColor: isButtonDisabled() ? "grey" : "#3FC060",
        }}
        onPress={onButtonPressed}
        disabled={isButtonDisabled()}
      >
        <Text style={styles.buttonText}>{STATUS_TO_TITLE[order.status]}</Text>
      </Pressable>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
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

export default BottomSheetDetails;
