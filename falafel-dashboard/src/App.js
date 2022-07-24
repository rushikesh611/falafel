import { Image, Layout, Divider } from "antd";
import AppRoutes from "./components/AppRoutes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import RestaurantContextProvider from "./contexts/RestaurantContext";

Amplify.configure(awsconfig);

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <RestaurantContextProvider>
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "white" }}>
          <Image
            src="https://img.freepik.com/premium-vector/traditional-dish-jewish-cuisine-falafel_51697-263.jpg"
            preview={false}
          />
          <Divider />
          <SideMenu />
        </Sider>
        <Layout>
          <Content style={{}}>
            <AppRoutes />
          </Content>
          <Footer style={{ textAlign: "center" }}>Falafel ©2022</Footer>
        </Layout>
      </Layout>
    </RestaurantContextProvider>
  );
}

export default withAuthenticator(App);
