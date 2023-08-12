import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import theme from "./styles/themes.js";
import "./App.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Submenu from "./components/Submenu.jsx";
import Sidebar from "./components/Sidebar.jsx";

const Layout = () => {
  // const queryClient = new QueryClient();
  return (
    <div className="app">
      {/* <QueryClientProvider client={queryClient}> */}
      <Navbar />
      <Submenu />
      <Sidebar />
      <Outlet />
      <Footer />
      {/* </QueryClientProvider> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
