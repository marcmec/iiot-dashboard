import "./App.css";
import { DashBoard } from "./components/Dashboard";
import { LayoutDashBoard } from "./components/Layout";

function App() {
    return (
        <LayoutDashBoard>
            <DashBoard />
        </LayoutDashBoard>
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
