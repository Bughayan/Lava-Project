import cestionImg from "../Images/truck.png";
import "./TruckRouting.css";
import "../App.css"

export default function TuckRouting() {
  return (
    <>
      <div className="imageDiv">
        <div className="image">
          <img src={cestionImg} />
        </div>
        <div className="text">
            <h2>A Quick Guide to</h2>
            <h1>Truck Routing Software</h1>
        </div>
      </div>
    </>
  );
}
