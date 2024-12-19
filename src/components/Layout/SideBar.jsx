import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

function SideBar({ toggleHandler }) {
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
      link: `https://wa.me/${+923350787287}?text=${encodeURIComponent(
        "Hello There ! I want to enquire about your products."
      )}`,
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
  return (
    <div>
      <div className="container side-nav d-flex bg-light ">
        <div
          className="ms-auto"
          style={{ cursor: "pointer" }}
          onClick={toggleHandler}
        >
          <CloseIcon />
        </div>
        <div className="list ">
          <ul className="list-unstyled">
            {navItem.map((item) => (
              <li key={item.key} className=" px-2 py-4 border-bottom">
                <Link
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
        <div className="social">
          <ul className="list-unstyled d-flex mt-1 justify-content-center">
            {socialLinks.map((link) => (
              <li className="px-4">
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
    </div>
  );
}

export default SideBar;
