import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import "antd/dist/antd.css";
import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/home";
import Order from "./pages/profile/order";
import OrderDetail from "./pages/profile/order_detail";
import Info from "./pages/profile/info";
import { ProfileLayout } from "./layout/ProfileLayout";
import { Provider } from "react-redux";
import { store } from "./store";
import Providerr from "./components/Provider";
import Contact from "./pages/contact";

function App() {
    const [login, setLogin] = useState(false);
    const submitLogin = () => {
      setLogin(true);
    };
    const submitLogout = () => {
      setLogin(false);
    };
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/profile"
              element={
                <Providerr>
                  <ProfileLayout submitLogout={submitLogout} login={login} />
                </Providerr>
              }
            >
              <Route path="order" element={<Order />} />
              <Route path="order/:id" element={<OrderDetail />} />
              <Route index element={<Info />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
