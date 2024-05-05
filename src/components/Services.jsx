import "./services.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RestoreIcon from "@mui/icons-material/Restore";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
function Services() {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">Our Services</h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear">
                <MiscellaneousServicesIcon />
              </i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-4 justify-content-center">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-chart-line">
                  <LocalShippingIcon />
                </i>
              </div>
              <h3>FREE DELIVERY</h3>
              <p>Free delivery on all orders in Lahore.</p>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-arrows-down-to-people">
                  <SupportAgentIcon />
                </i>
              </div>
              <h3>SUPPORT 24/7</h3>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-globe">
                  <RestoreIcon />
                </i>
              </div>
              <h3>7 DAYS RETURN</h3>
              <p>Simply return it within 7 days for an exchange.</p>
            </div>
          </div>

          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-globe">
                  <DesignServicesIcon />
                </i>
              </div>
              <h3>CUSTOM DESIGN BUILD</h3>
              <p>We can build your personalised design products too.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
