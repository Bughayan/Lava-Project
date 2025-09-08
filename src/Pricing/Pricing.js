import "./Pricing.css";
import checkmarks from "../Images/icons/checkmark.png"

export default function Pricing() {
  return (
    <>
      <div className="pricecontainer">
        <div className="pricing_text">
          <h1>Pricing Table</h1>
          <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </div>
        <div className="pice_cards">
          <div className="price_card">
            <h1>START</h1>
            <h2>$15/ month</h2>
    
                <img src= {checkmarks}/>
                <p>Lorem Ipsum is simply dummy text.</p>
                 <img src= {checkmarks}/>
                <p>Lorem Ipsum is simply dummy text.</p>
                 <img src= {checkmarks}/>
                <p>Lorem Ipsum is simply dummy text.</p>
                 <img src= {checkmarks}/>
                <p>Lorem Ipsum is simply dummy text.</p>
          
          </div>
        </div>
      </div>
    </>
  );
}
