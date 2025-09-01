import About from "../About/About";
import "../App.css";
import Find from "../Find/Find";
import TuckRouting from "../TruckRouting/TruckRouting";
import Vide0Sction from "./VideoSection";

export default function Main() {
  return (
    <main>
      <Vide0Sction />
      <About/>
      <TuckRouting/>
      <Find/> 
    </main>
  );
}
