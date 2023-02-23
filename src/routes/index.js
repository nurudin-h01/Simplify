import { Routes, Route } from "react-router";
import Dashboard from "pages/Dashboard";
import Profil from "pages/Profil";
import Kelas from "pages/KelasDetail";
import Riwayat from "pages/Riwayat";


export default function Routers() {
  return (
    <Routes>
        <Route path="/kelas" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/kelas/:id" element={<Kelas />} />
        <Route path="/riwayat" element={<Riwayat />} />
    </Routes>
  );
}