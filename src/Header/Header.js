import "./Header.css";
import "../App.css";
import logo from "../Images/lava.png";
import arm from "../Images/armenia.png";
import usa from "../Images/usa.png";
import rus from "../Images/russia.png";
import { useRef, useState, useLayoutEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { removeLngPrefix } from "../i18n/i18n";
import { Link } from "react-scroll";

const flags = [
  { id: 1, img: usa, alt: "usa" },
  { id: 2, img: arm, alt: "arm" },
  { id: 3, img: rus, alt: "rus" },
];

export default function Header() {
  const {
    t,
    i18n,
    i18n: { language },
  } = useTranslation();
  const [selected, setSelected] = useState(
    flags.find((f) => f.alt === language) || flags[1]
  );
  const [dropdown, setDropdown] = useState(false);
  const timeRef = useRef(null);
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  const switcher = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(flags.find((f) => f.alt === lng));
    const newPath = `/${lng}${removeLngPrefix(pathname)}${search}${hash}`;
    navigate(newPath, { replace: true });
    setDropdown(false);
  };

  useLayoutEffect(() => {
    const currentPathname = window.location.href.replace(
      window.location.origin,
      ""
    );
    const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;
    if (currentPathname !== newPathname) {
      window.history.replaceState({}, "", newPathname);
    }
  }, [language]);

  const showDropDown = () => {
    clearTimeout(timeRef.current);
    setDropdown(true);
  };

  const hideDropDown = () => {
    timeRef.current = setTimeout(() => setDropdown(false), 300);
  };

  return (
    <header>
      <div className="container menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav>
          <NavLink className="nav-link" to="/home">
            {t("navLinkWords.Home")}
          </NavLink>
          <Link
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            to="about"
          >
            {t("navLinkWords.About")}
          </Link>

          <NavLink className="nav-link" to="/services">
            {t("navLinkWords.Services")}
          </NavLink>
          <NavLink className="nav-link" to="/partners">
            {t("navLinkWords.Partners")}
          </NavLink>
          <NavLink className="nav-link" to="/pricing">
            {t("navLinkWords.Pricing")}
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            {t("navLinkWords.Contact")}
          </NavLink>
        </nav>

        <div
          className="flag_dropdown"
          onMouseEnter={showDropDown}
          onMouseLeave={hideDropDown}
        >
          <img src={selected.img} alt={selected.alt} className="flag-choosen" />
          <div className={`flag-div-option ${dropdown ? "visible" : ""}`}>
            {flags
              .filter((flag) => flag.id !== selected.id)
              .map((flag) => (
                <img
                  key={flag.id}
                  src={flag.img}
                  alt={flag.alt}
                  onClick={() => {
                    switcher(flag.alt);
                  }}
                  className="flag-option"
                />
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
