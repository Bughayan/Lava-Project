import "./Cards.css";
import vector1 from "../Images/icons/Vector1.png";
import vector2 from "../Images/icons/Vector2.png";
import vector3 from "../Images/icons/Vector3.png";

export default function Cards() {
  return (
    <>
    <div className="cards_parrent">
      <div className="cards">
        <div className="card">
          <dv className="vector">
            <img src={vector1} />
          </dv>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="card">
          <dv className="vector">
            <img src={vector2} />
          </dv>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="card">
          <dv className="vector">
            <img src={vector3} />
          </dv>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>LEARN MORE</button>
        </div>  
      </div>
      </div>
    </>
  );
}
