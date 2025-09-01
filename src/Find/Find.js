import "./Find.css";
import "../App.css";
// import backImage from "../Images/findI0mge.jpg";
import findImage from "../Images/find.jpg";
import app from "../Images/AppStore.png";
import google from "../Images/Google.png";
import { useTranslation } from "react-i18next";

export default function Find() {
  const { t } = useTranslation();
  return (
    <>
      <div className="findDiv">
        <div className="find">
          <h1>{t("findWorld.Find_your_truck")}</h1>
          <div className="findImg">
            <img src={findImage} className="findMap" />
          </div>
          <div className="storeButtons">
              {/* <div className="google_btn">
                <img src={google} alt="Google Play" />
              </div>
              <div className="app_btn">
                <img src={app} alt="App Store" />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
