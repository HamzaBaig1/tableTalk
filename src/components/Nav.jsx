import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import "./nav.css";
import { useState } from "react";
import SideBar from "./SideBar";
import { FocusOn } from "react-focus-on";
import { Link } from "react-router-dom";

function Nav() {
  const navItem = [
    {
      title: "Office Chairs",
      key: "/OfficeChairs/RevolvingChairs",
    },
    {
      title: "Office Tables",
      key: "/OfficeTables/ExecutiveTables",
    },
    {
      title: "Dining Chairs",
      key: "/DiningChairs",
    },
    {
      title: "Dining Tables",
      key: "/DiningTables",
    },
  ];
  const socialLinks = [
    {
      key: "whatsapp",
      icon: <WhatsAppIcon />,
      link: "https://web.whatsapp.com/",
    },
    {
      key: "instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
    {
      key: "facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  function toggleHandler() {
    setIsOpen((curr) => !curr);
    console.log(isOpen);
  }
  return (
    <>
      <div className="container-fluid p-2 bg-dark top-nav">
        <div>
          <span>
            <CallIcon sx={{ color: "yellow" }} fontSize="small" />
            <span className="text-light ms-2">0900-78601</span>
          </span>
        </div>
        <div className="ms-3">
          <span>
            {" "}
            <EmailIcon sx={{ color: "yellow" }} fontSize="small" />
            <span className="text-light ms-2">umairahmad@gmail.com</span>
          </span>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-between p-3 bg-light">
        <div className="logo my-auto">
          <h6>
            {" "}
            <Link style={{ color: "inherit", textDecoration: "none" }} to={"/"}>
              <img src={logo} alt="" className="logo" />
            </Link>
          </h6>
        </div>
        <div onClick={toggleHandler} className="menu">
          <MenuIcon />
        </div>
        <div className="list  display">
          <ul className="d-flex my-auto  list-unstyled">
            {navItem.map((item) => (
              <li className=" px-4 ">
                <Link
                  className="nav-link nav-link-ltr"
                  key={item.key}
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={item.key}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="social  display ">
          <ul className="list-unstyled d-flex my-auto ">
            {socialLinks.map((link) => (
              <li className="px-2" key={link.key}>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={link.link}
                  target="#blank"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FocusOn enabled={isOpen} onClickOutside={toggleHandler}>
        {isOpen && <SideBar toggleHandler={toggleHandler} />}
      </FocusOn>
    </>
  );
}

export default Nav;
