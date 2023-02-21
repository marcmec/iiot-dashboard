import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CompaniesContextProvider } from "./contexts/Companies";
import { CompanyContextProvider } from "./contexts/Company";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CompaniesContextProvider>
        <CompanyContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CompanyContextProvider>
    </CompaniesContextProvider>
);
