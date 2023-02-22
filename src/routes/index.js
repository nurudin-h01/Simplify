import { Routes, Route } from "react-router";
import Dashboard from "pages/Dashboard";
import Profil from "pages/Profil";


export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}