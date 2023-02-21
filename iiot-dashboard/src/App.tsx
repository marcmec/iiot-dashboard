import "./App.css";
import { CompanyContextProvider } from "./contexts/Company";
import { LayoutRoutes } from "./routes";

function App() {
    return (
        <CompanyContextProvider>
            {" "}
            <LayoutRoutes />{" "}
        </CompanyContextProvider>
    );
}

export default App;

// {Array.from(assets).map((e: any) => (
//   <>
//       <div key={e.id}>{e.healthscore}</div>
//       <Image src={e.image} alt="wtf" width={200} />
//       <Line {...config} />
//   </>
// ))}
