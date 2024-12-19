// import { useState } from "react";
import { useEffect, useState } from "react";
import "./quickView.css";

import ProductModal from "../Layout/ProductModal";
import { getOfficeChairsRevolving } from "../../Services/getOfficeChairsRevolving";
import { getOfficeChairsVisitor } from "../../Services/getOfficeChairsVisitor";

const OfficeChairGrid = ({ activeTab }) => {
  const [officeChairsRevolving, setOfficeChairsRevolving] = useState([]);
  const [officeChairsVisitor, setOfficeChairsVisitor] = useState([]);
  const [modalData, setModalData] = useState("");
  const [loading, setLoading] = useState(true);

  const [modalShow, setModalShow] = useState(false);

  useEffect(function () {
    const fetchOfficeChairsRevolving = async () => {
      try {
        const data = await getOfficeChairsRevolving();
        setOfficeChairsRevolving(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOfficeChairsRevolving();
  }, []);

  //Fettching Visitor Chairs
  useEffect(function () {
    const fetchOfficeChairsVisitor = async () => {
      try {
        const data = await getOfficeChairsVisitor();
        setOfficeChairsVisitor(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOfficeChairsVisitor();
  }, []);

  const chairs =
    activeTab === "RevolvingChairs"
      ? officeChairsRevolving
      : officeChairsVisitor;
  if (loading) {
    return <div className="spinner"></div>; // Render spinner while loading
  }
  return (
    <div className="row mx-auto">
      {chairs.map((chair) => (
        <div
          key={chair.id}
          className="col-md-4 mb-5  d-flex justify-content-center"
          onClick={() => {
            setModalData(chair);
            setModalShow(true);
          }}
        >
          <div className="card bg-transparent border-0 h-100 w-75">
            <img
              src={chair.image}
              className="card-img-top h-100"
              alt={chair.model}
            />
            <div className="card-body px-0">
              <h5 className="card-title">{chair.model}</h5>

              <div className="quick-view mt-3 ">
                <small>PKR {chair.price}/-</small>
                <button
                  // type="button"
                  className="quick-view-btn ms-auto"
                  onClick={() => {
                    setModalData(chair);
                    setModalShow(true);
                  }}
                >
                  Quick View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ProductModal
        data={modalData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default OfficeChairGrid;
