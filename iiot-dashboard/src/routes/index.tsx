import { Route, Routes } from "react-router-dom";
import { AssetsUnits } from "../components/Assets/AssetsUnits";
import { AssetCard } from "../components/Assets/Card";
import { Companies } from "../components/Companies";
import { Company } from "../components/Companies/Company";
import { Units } from "../components/Companies/Company/Units";
import { DashBoard } from "../components/Dashboard";
import { LayoutDashBoard } from "../components/Layout";
import { Users } from "../components/Users";
import { WorkOrdersUnits } from "../components/WorkersOrders/Units";

export const LayoutRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Companies />} />
                <Route element={<LayoutDashBoard />}>
                    <Route path="/company/:id" element={<Company />} />
                    <Route path="/company/assets/:id" element={<DashBoard />} />
                    <Route path="/asset/1" element={<AssetCard />} />
                    <Route path="/company/assets" element={<AssetsUnits />} />
                    <Route path="/company/users" element={<Users />} />
                    <Route path="/company/units" element={<Units />} />
                    <Route
                        path="/company/work-orders"
                        element={<WorkOrdersUnits />}
                    />
                </Route>
            </Routes>
        </div>
    );
};
