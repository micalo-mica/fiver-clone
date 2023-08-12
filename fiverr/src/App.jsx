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
import Gig from "./pages/Gig.jsx";
import MyGigs from "./pages/MyGigs.jsx";
import Orders from "./pages/Orders.jsx";
import Gigs from "./pages/Gigs.jsx";
import Add from "./pages/Add.jsx";
import Login from "./pages/Login.jsx";
import Message from "./pages/Message.jsx";
import Messages from "./pages/Messages.jsx";
import Register from "./pages/Register.jsx";

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
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/myGigs",
        element: <MyGigs />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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
