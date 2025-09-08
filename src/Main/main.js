import About from "../About/About";
import "../App.css";
import Find from "../Find/Find";
import TuckRouting from "../TruckRouting/TruckRouting";
import Vide0Sction from "./VideoSection";
import Services from "../Services/Services"
import Cards from "../Cards/Cards";
import Pricing from "../Pricing/Pricing";

export default function Main() {
  return (
    <main>
      <Vide0Sction />
      <About/>
      <TuckRouting/>
      <Find/> 
      <Services/>
      <Cards/>
      <Pricing/>
    </main>
  );
}
