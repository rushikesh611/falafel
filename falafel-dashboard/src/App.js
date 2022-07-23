import Orders from "./pages/Orders";
import { Route, Routes } from "react-router-dom";
import DetailedOrder from "./pages/DetailedOrder";
import { Layout, Image } from "antd";
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
        <SideMenu />
      </Sider>
      <Layout>
        <Content style={{}}>
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Falafel ©2022</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
