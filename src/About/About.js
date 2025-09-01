import "../App.css";
import "./About.css";
import image from "../Images/About.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    
    <>
      <div className="divImage">
        <div className="imaage">
          <img src={image} />
        </div>

        <div className="about">
        <h1> {t("AboutWorld.About_Us")}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </p>
        <button>{t("AboutWorld.LEARN_MORE")}</button>
        </div>
      </div>
    </>
  );
}
