import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12 col-md-4  d-flex justify-content-center mb-4  ">
            <div className="footer-box">
              <h5 className="mb-4">Get In Touch</h5>
              <ul>
                <li>
                  <EmailIcon className="me-2" fontSize="small" />
                  umairahmad@gmail.com
                </li>
                <li>
                  {" "}
                  <EmailIcon className="me-2" fontSize="small" />
                  umairahmad@gmail.com
                </li>
                <li>
                  <CallIcon fontSize="small" className="me-2" /> 0900-78601
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex justify-content-center mb-4">
            <div className=" footer-box">
              <h5 className="mb-4">Information</h5>
              <ul>
                <li>Return & shipping Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex justify-content-center">
            <div className="footer-box">
              <h5 className="mb-4">The Company</h5>
              <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Track Your Order</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
