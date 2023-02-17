import "./App.css";
import { LayoutRoutes } from "./routes";

function App() {
    return <LayoutRoutes />;
}

export default App;

// {Array.from(assets).map((e: any) => (
//   <>
//       <div key={e.id}>{e.healthscore}</div>
//       <Image src={e.image} alt="wtf" width={200} />
//       <Line {...config} />
//   </>
// ))}
