import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import NoMatch from "./components/pages/404";
import Layout from "./components/layout/Layout";
import Login from "./components/authentication/Login";
import useStore from "./store/store";
import { useEffect } from "react";
function App() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const login = useStore((state) => state.Login);
  const logout = useStore((state) => state.Logout);

  useEffect(() => {
    {
      logout();
    }
  }, []);
  return (
    <>
      {!isLoggedIn ? (
        <div className="w-[100%] overflow-x-hidden ">
          <Layout />
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
