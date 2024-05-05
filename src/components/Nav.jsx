import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";
import { useState } from "react";

function Nav() {
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
          <h6>Table Talk</h6>
        </div>
        <div onClick={toggleHandler} className="menu">
          <MenuIcon />
        </div>
        <div className="list  display">
          <ul className="d-flex my-auto  list-unstyled">
            <li className=" px-4">Living</li>
            <li className=" px-4">Bedroom</li>
            <li className=" px-4">Dining</li>
            <li className=" px-4">Outdoor</li>
            <li className=" px-4">Storage</li>
            <li className=" px-4">Study</li>
            <li className=" px-4">Office</li>
            <li className=" px-4">Cafe</li>
          </ul>
        </div>
        <div className="social  display ">
          <ul className="list-unstyled d-flex my-auto ">
            <li className="px-2">
              <InstagramIcon />
            </li>
            <li className="px-2">
              <WhatsAppIcon />
            </li>
            <li className="px-2">
              <FacebookIcon />
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="container side-nav d-flex bg-light">
          <div
            className="ms-auto"
            style={{ cursor: "pointer" }}
            onClick={toggleHandler}
          >
            <CloseIcon />
          </div>
          <div className="list ">
            <ul className="list-unstyled">
              <li className=" px-2 py-3 border-bottom">Living</li>
              <li className=" px-2 py-3 border-bottom">Bedroom</li>
              <li className=" px-2 py-3 border-bottom">Dining</li>
              <li className=" px-2 py-3 border-bottom">Outdoor</li>
              <li className=" px-2 py-3 border-bottom">Storage</li>
              <li className=" px-2 py-3 border-bottom">Study</li>
              <li className=" px-2 py-3 border-bottom">Office</li>
              <li className=" px-2 py-3 border-bottom">Cafe</li>
            </ul>
          </div>
          <div className="social">
            <ul className="list-unstyled d-flex mt-1 justify-content-center">
              <li className="px-4">
                <InstagramIcon />
              </li>
              <li className="px-4">
                <WhatsAppIcon />
              </li>
              <li className="px-4">
                <FacebookIcon />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
