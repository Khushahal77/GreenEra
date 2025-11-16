import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Working from "./components/Working";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import HomeContent from "./pages/HomeContent";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeContent />} />
          <Route path="login" element={<Login modal={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
