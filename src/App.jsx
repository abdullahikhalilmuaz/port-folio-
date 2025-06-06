import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ManagePortFolio from "./pages/ManagePortFolio";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Resume from "./components/Resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [componentToShow, setComponentToShow] = useState("home");

  return (
    <BrowserRouter>
      <Header
        setComponentToShow={setComponentToShow}
        componentToShow={componentToShow}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              componentToShow={componentToShow}
              setComponentToShow={setComponentToShow}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              componentToShow={componentToShow}
              setComponentToShow={setComponentToShow}
            />
          }
        />
        <Route path="/adminAuthenticate" element={<ManagePortFolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/me" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}
