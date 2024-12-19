import { useEffect, useState } from "react";
import "./officeTables.css";
import Layout from "../components/Layout/Layout";
import OfficeTableGrid from "../components/Grids/OfficeTableGrid";
import office from "../assets/office.png";
import { Link, useNavigate, useParams } from "react-router-dom";

function OfficeTables() {
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
    navigate(`/OfficeTables/${tab}`);
  };

  return (
    <Layout>
      <section className="officeTables">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
              <h2 className="fw-bold fs-1">Office Tables</h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear">
                  <div className="chair-logo">
                    <img src={office} alt="" style={{ width: "100%" }} />
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
                className={`btn me-3 font ${
                  activeTab === "ExecutiveTables"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
                to="/OfficeTables/ExecutiveTables"
                onClick={() => handleTabChange("ExecutiveTables")}
              >
                Executive
              </Link>
              <Link
                className={`btn font ${
                  activeTab === "WorkStations" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleTabChange("WorkStations")}
                to="/OfficeTables/WorkStations"
              >
                WorkStations
              </Link>
              <Link
                className={`btn ms-3 font  ${
                  activeTab === "StudyDesks" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleTabChange("StudyDesks")}
                to="/OfficeTables/StudyDesks"
              >
                Study Desks
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
                  <OfficeTableGrid activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default OfficeTables;
