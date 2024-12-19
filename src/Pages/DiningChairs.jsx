import Layout from "../components/Layout/Layout";
import "./diningChairs.css";
import diningchair from "../assets/dining.png";
import DiningChairGrid from "../components/Grids/DiningChairGrid";

function DiningChairs() {
  return (
    <Layout>
      <section className="diningChairs">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
              <h2 className="fw-bold fs-1">Dining Chairs</h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear">
                  <div className="chair-logo text-center">
                    <img
                      className="color"
                      src={diningchair}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </i>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="mt-5 text-center"></div>
            <div className="container mt-5">
              <div className="row">
                <div className="row ms-auto">
                  <DiningChairGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DiningChairs;
