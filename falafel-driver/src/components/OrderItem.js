import { Entypo } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const OrderItem = ({ order }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "#3FC060",
        borderRadius: 10,
        borderWidth: 2,
        margin: 12,
      }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: "25%",
          height: "100%",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
      <View style={{ marginLeft: 10, flex: 1, paddingVertical: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ color: "grey" }}>{order.Restaurant.address}</Text>

        <Text style={{ marginTop: 10, fontWeight: "500" }}>
          Delivery Details:
        </Text>
        <Text style={{ color: "grey" }}>{order.User.name}</Text>
        <Text style={{ color: "grey" }}>{order.User.address}</Text>
      </View>
      <View
        style={{
          padding: 5,
          backgroundColor: "#3FC060",
          borderBottomRightRadius: 8,
          borderTopRightRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo
          name="check"
          size={30}
          color="white"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
