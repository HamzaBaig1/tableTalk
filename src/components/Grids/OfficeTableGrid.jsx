import React, { useEffect, useState } from "react";
import { getStudyDesk } from "../../Services/getStudyDesk";
import { getExecutiveDesk } from "../../Services/getExecutiveDesk";
import { getWorkstations } from "../../Services/getWorkstations";
import ProductModal from "../Layout/ProductModal";

const OfficeTableGrid = ({ activeTab }) => {
  const [studyDesks, setStudyDesks] = useState([]);
  const [executiveDesks, setExecutiveDesks] = useState([]);
  const [workstations, setWorkstations] = useState([]);
  const [modalData, setModalData] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(function () {
    const fetchStudyDesks = async () => {
      try {
        const data = await getStudyDesk();
        setStudyDesks(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudyDesks();
  }, []);

  useEffect(function () {
    const fetchExecutiveDesks = async () => {
      try {
        const data = await getExecutiveDesk();
        setExecutiveDesks(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExecutiveDesks();
  }, []);
  useEffect(function () {
    const fetchWorkstations = async () => {
      try {
        const data = await getWorkstations();
        setWorkstations(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkstations();
  }, []);

  //   const tables = activeTab === "revolving" ? revolvingtables : visitortables;
  let tables;
  switch (activeTab) {
    case "ExecutiveTables":
      tables = executiveDesks;
      break;
    case "WorkStations":
      tables = workstations;
      break;
    case "StudyDesks":
      tables = studyDesks;
      break;
    default:
      tables = null; // or whatever default value you want
  }
  if (loading) {
    return <div className="spinner"></div>; // Render spinner while loading
  }
  return (
    <div className="row mx-auto">
      {tables.map((table) => (
        <div
          key={table.id}
          className="col-md-4 mb-5  d-flex justify-content-center"
          onClick={() => {
            setModalData(table);
            setModalShow(true);
          }}
        >
          <div className="card bg-transparent border-0 h-100 w-75">
            <img
              src={table.image}
              className="card-img-top h-100"
              alt={table.model}
            />
            <div className="card-body px-0">
              <h5 className="card-title">{table.model}</h5>

              <div className="quick-view mt-3 ">
                <small>PKR {table.price}/-</small>
                <button
                  // type="button"
                  className="quick-view-btn ms-auto"
                  onClick={() => {
                    setModalData(table);
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

export default OfficeTableGrid;
