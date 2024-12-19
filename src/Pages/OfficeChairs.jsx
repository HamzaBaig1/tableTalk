import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "./officeChairs.css";
import chair from "../assets/swivel-chair.png";

import ChairGrid from "../components/Grids/OfficeChairGrid";
import { Link, useNavigate, useParams } from "react-router-dom";

function OfficeChairs() {
  const { activeTab: paramTab } = useParams();
  const [activeTab, setActiveTab] = useState(paramTab);
  const navigate = useNavigate();

  useEffect(() => {
    if (paramTab && paramTab !== activeTab) {
      setActiveTab(paramTab);
    }
  }, [paramTab, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/OfficeChairs/${tab}`);
  };

  return (
    <Layout>
      <section className="officeChairs">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
              <h2 className="fw-bold fs-1">Office Chairs</h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear">
                  <div className="chair-logo">
                    <img src={chair} alt="" style={{ width: "100%" }} />
                  </div>
                </i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="mt-5 text-center">
              <Link
                className={`btn me-4 font ${
                  activeTab === "RevolvingChairs"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
                to="/OfficeChairs/RevolvingChairs"
                onClick={() => handleTabChange("RevolvingChairs")}
              >
                Revolving Chairs
              </Link>
              <Link
                className={`btn font ${
                  activeTab === "VisitorChairs"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
                onClick={() => handleTabChange("VisitorChairs")}
                to="/OfficeChairs/VisitorChairs"
              >
                Visitor Chairs
              </Link>
            </div>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-12">
                  <h2 className="my-3">
                    {activeTab === "outdoor"
                      ? "Outdoor Chairs"
                      : "Indoor Chairs"}
                  </h2>
                </div> */}
                <div className="row ms-auto">
                  <ChairGrid activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default OfficeChairs;
