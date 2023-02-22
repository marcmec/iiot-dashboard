import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AssetsContextProvider } from "./contexts/Assets";
import { CompaniesContextProvider } from "./contexts/Companies";
import { CompanyContextProvider } from "./contexts/Company";
import { UsersContextProvider } from "./contexts/Users";
import { WorkOrdersContextProvider } from "./contexts/WorkOrders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CompaniesContextProvider>
        <CompanyContextProvider>
            <UsersContextProvider>
                <AssetsContextProvider>
                    <WorkOrdersContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </WorkOrdersContextProvider>
                </AssetsContextProvider>
            </UsersContextProvider>
        </CompanyContextProvider>
    </CompaniesContextProvider>
);
