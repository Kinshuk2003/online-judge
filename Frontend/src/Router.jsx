import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Problems from "./pages/Problems";
import Contest from "./pages/Contest";
import Discuss from "./pages/Discuss";
import Interview from "./pages/Interview";
import Store from "./pages/Store";



export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/store" element={<Store />} />
        </Routes>
    )
}