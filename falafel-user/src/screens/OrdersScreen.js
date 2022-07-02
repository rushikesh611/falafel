import { FlatList, View } from "react-native";
import OrderListItem from "../components/OrderListItem";
import { useOrderContext } from "../contexts/OrderContext";

const OrdersScreen = () => {
  const { orders } = useOrderContext();
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
