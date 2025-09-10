import "./Pricing.css";
import checkmarks from "../Images/icons/checkmark.png";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function title() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();
      setData(data);
    }
    title();
  }, []);
  return (
    <>
      <div className="price_parennt">
        <div className="pricecontainer">
          <div className="pricing_text">
            <h1>Pricing Table</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="pice_cards">
            <div className="price_card">
              <h1>START</h1>
              <hr class="white-line" />
              <h2>$15/ month</h2>
              <hr class="white-line second" />

              {data
                ? data.map((el) => {
                    return el.id < 5 ? (
                      <div key={el.id}>
                        <img src={checkmarks} />
                        <p>{el.title.slice(0, 100)}</p>
                      </div>
                    ) : null;
                  })
                : null}

              <button>LEARN MORE</button>
            </div>

            <div className="price_card">
              <h1>UNLIMIT</h1>
              <hr class="white-line" />
              <h2>$25/ month</h2>
              <hr class="white-line second" />

              {data
                ? data.map((el) => {
                    return el.id > 5 && el.id < 10 ? (
                      <div key={el.id}>
                        <img src={checkmarks} />
                        <p>{el.title.slice(0, 30)}</p>
                      </div>
                    ) : null;
                  })
                : null}

              <button>LEARN MORE</button>
            </div>
            <div className="price_card">
              <h1>FAST</h1>
              <hr class="white-line" />
              <h2>$35/ month</h2>
              <hr class="white-line second" />

              {data
                ? data.map((el) => {
                    return el.id > 10 && el.id < 15 ? (
                      <div key={el.id}>
                        <img src={checkmarks} />
                        <p>{el.title.slice(0, 40)}</p>
                      </div>
                    ) : null;
                  })
                : null}

              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
