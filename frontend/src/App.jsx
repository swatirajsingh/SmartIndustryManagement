import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Production from "./pages/Production";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/production" element={<Production />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;