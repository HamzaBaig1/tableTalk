import Layout from "../components/Layout/Layout";
import "./diningTable.css";
import diningtable from "../assets/dinner-table.png";
import DiningTableGrid from "../components/Grids/DiningTableGrid";

function DiningTables() {
  return (
    <Layout>
      <section className="diningTable">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
              <h2 className="fw-bold fs-1">Dining Tables</h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear">
                  <div className="chair-logo">
                    <img
                      className="color"
                      src={diningtable}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
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
                  <DiningTableGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DiningTables;
