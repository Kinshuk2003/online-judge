import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Problems from "./pages/Problems";
import Contest from "./pages/Contest";
import Discuss from "./pages/Discuss";
import Interview from "./pages/Interview";
import Store from "./pages/Store";
import ProblemPlayground from "./pages/ProblemPlayground";
import AuthModal from "./pages/Auth";
import PrivateRoute from "./PrivateRoute";




export default function Router() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthModal />} />
            <Route path="/" element={<Explore />} />
            <Route element={<PrivateRoute/>}>
                <Route path="/explore" element={<Explore />} /> 
                <Route path="/problem-list" element={<Problems />} />
                <Route path="/problems/:path" element={<ProblemPlayground />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/discuss" element={<Discuss />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/store" element={<Store />} />
            </Route>
        </Routes>
    )
}