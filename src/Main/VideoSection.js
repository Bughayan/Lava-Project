import { useTranslation } from "react-i18next";
import backgroundVideo from "../Videos/backgondVideo.mp4";
import "./VideoSection.css";

export default function VideoSction() {
  const { t } = useTranslation();
  return (
    <>
      <div className="videodiv">
        <div className="video">
          <video id="bg-video" loop autoPlay muted playsInline>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="videotext">
          <h1>
            <spam className="ams" style={{ animationDelay: "0s" }}>
              {" "}
              {t("VideoSectionWorld.Advanced_Fleet")}{" "}
            </spam>
            <spam className="ams" style={{ animationDelay: "1s" }}>
              {" "}
              {t("VideoSectionWorld.Management")}{" "}
            </spam>
            <spam className="ams" style={{ animationDelay: "1.5s" }}>
              {" "}
              {t("VideoSectionWorld.Solution")}
            </spam>
          </h1>
          <button> {t("VideoSectionWorld.GET_STARTED")}</button>
        </div>
      </div>
    </>
  );
}
