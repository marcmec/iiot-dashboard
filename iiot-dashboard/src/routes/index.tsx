import { Route, Routes } from "react-router-dom";
import { AssetsUnits } from "../components/Assets/AssetsUnits";
import { AssetCard } from "../components/Assets/Card";
import { Companies } from "../components/Companies";
import { Company } from "../components/Companies/Company";
import { DashBoard } from "../components/Dashboard";
import { LayoutDashBoard } from "../components/Layout";
import { AllUsers } from "../components/Users";

export const LayoutRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Companies />} />
                <Route element={<LayoutDashBoard />}>
                    <Route path="/company/:id" element={<Company />} />
                    <Route path="/company/assets/:id" element={<DashBoard />} />
                    <Route path="/asset/1" element={<AssetCard />} />
                    <Route path="/company/units" element={<AssetsUnits />} />
                    <Route path="/company/users" element={<AllUsers />} />
                    {/* <Route path="/company/units" element={<Units />} /> */}
                </Route>
            </Routes>
        </div>
    );
};
