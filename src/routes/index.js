import { Routes, Route } from "react-router";
import App from "../App";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}