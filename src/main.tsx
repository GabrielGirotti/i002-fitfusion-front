import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  HomePage,
  ClassesList,
  UserProfile,
  ClassDetails,
  CalendarComponent,
} from "./views";
import { AuthLayout } from "./layouts";
import TrainerProfilePage from "./views/TrainerProfilePage/TrainerProfilePage";
import { ContactForm } from "./views/ContactForm/ContactForm";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Nutritionist from "./views/Nutritionist/Nutritionist";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage";
import PrincipalLayout from "./layouts/PrincipalLayout/PrincipalLayout";
import Physio from "./views/Physiotherapist/Physio";
import Privacy from "./views/Privacy/Privacy";
import { Provider } from "react-redux";
import { store } from "./redux/store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "privacy-policy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "profile",
    element: <UserProfile />,
  },
  {
    path: "trainer-profile/:id",
    element: <TrainerProfilePage />,
  },
  {
    path: "classes",
    element: <ClassesList />,
  },
  {
    path: "class-detail/:id",
    element: <ClassDetails />,
  },
  {
    path: "/calendar",
    element: <CalendarComponent />,
  },
  {
    path: "nutrition",
    element: <Nutritionist />,
  },
  {
    path: "physiotherapist",
    element: <Physio />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, // Acá debemos poner una pagina 404
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
