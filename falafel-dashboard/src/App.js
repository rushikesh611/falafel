import { Image, Layout, Divider } from "antd";
import AppRoutes from "./components/AppRoutes";
import SideMenu from "./components/SideMenu";

const { Sider, Content, Footer } = Layout;

function App() {
  return (
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
  );
}

export default App;
