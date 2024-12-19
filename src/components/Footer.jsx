import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12 col-md-6  d-flex justify-content-center mb-4  ">
            <div className="footer-box">
              <h5 className="mb-4">Get In Touch</h5>
              <ul>
                <li>
                  <EmailIcon className="me-2" fontSize="small" />
                  tabletalk042@gmail.com{" "}
                </li>
                <li>
                  <CallIcon fontSize="small" className="me-2" /> 0335-0787287
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <div className="footer-box">
              <h5 className="mb-4">The Company</h5>
              <ul>
                <li>
                  <LocationOnIcon /> <span className="fw-bold"> Warehouse</span>{" "}
                  : Manawan Lahore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
