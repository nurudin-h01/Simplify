import { Routes, Route } from "react-router";
import Dashboard from "pages/Dashboard";
import Profil from "pages/Profil";
import Kelas from "pages/KelasDetail";


export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/kelas" element={<Kelas />} />
    </Routes>
  );
}