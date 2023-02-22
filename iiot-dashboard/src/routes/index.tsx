import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../components/Assets/Dashboard";
import { Companies } from "../components/Companies";
import { Company } from "../components/Companies/Company";
import { AssetsUnits } from "../components/Companies/Company/Units/AssetsUnits";
import { LayoutDashBoard } from "../components/Layout";
import { AllUsers } from "../components/Users";
import { AllworkOrders } from "../components/WorkersOrders/Table";

export const LayoutRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Companies />} />
                <Route element={<LayoutDashBoard />}>
                    <Route path="/company/:id" element={<Company />} />
                    <Route path="/company/assets/:id" element={<DashBoard />} />
                    <Route path="/company/units" element={<AssetsUnits />} />
                    <Route path="/company/users" element={<AllUsers />} />
                    <Route
                        path="/company/workorders"
                        element={<AllworkOrders />}
                    />
                </Route>
            </Routes>
        </div>
    );
};
