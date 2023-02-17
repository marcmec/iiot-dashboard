import { Route, Routes } from "react-router-dom";
import { AssetCard } from "../components/Assets/Card";
import { Companies } from "../components/Companies";
import { DashBoard } from "../components/Dashboard";
import { LayoutDashBoard } from "../components/Layout";
import { Users } from "../components/Users";

export const LayoutRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Companies />} />
                <Route element={<LayoutDashBoard />}>
                    <Route path="/empresa/1" element={<DashBoard />} />
                    <Route path="/asset/1" element={<AssetCard />} />
                    <Route path="/assets" element={<Users />} />
                    <Route path="/users" element={<Users />} />
                </Route>
            </Routes>
        </div>
    );
};
