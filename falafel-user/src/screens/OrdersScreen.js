import { FlatList, View } from "react-native";
import orders from "../../assets/data/orders.json";
import OrderListItem from "../components/OrderListItem";

const OrdersScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
