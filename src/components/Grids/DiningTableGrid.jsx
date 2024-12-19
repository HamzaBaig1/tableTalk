import { useEffect, useState } from "react";
import { getDiningTables } from "../../Services/getDiningTables";
import ProductModal from "../Layout/ProductModal";

function DiningTableGrid() {
  const [diningTables, setDiningTables] = useState([]);
  const [modalData, setModalData] = useState("");
  const [loading, setLoading] = useState(true);

  const [modalShow, setModalShow] = useState(false);

  useEffect(function () {
    const fetchDiningTables = async () => {
      try {
        const data = await getDiningTables();
        setDiningTables(data);
      } catch (error) {
        console.error("Error Fetching Data :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDiningTables();
  }, []);

  if (loading) {
    return <div className="spinner"></div>; // Render spinner while loading
  }

  return (
    <div>
      <div className="row mx-auto">
        {diningTables.map((table) => (
          <div
            key={table.id}
            className="col-md-4 mb-3 d-flex justify-content-center"
            onClick={() => {
              setModalData(table);
              setModalShow(true);
            }}
          >
            <div className="card bg-transparent border-0 h-100 w-75">
              <img
                src={table.image}
                className="card-img-top h-100 "
                alt={table.model}
              />
              <div className="card-body px-0">
                <h5 className="card-title">{table.model}</h5>

                <div className="quick-view">
                  <small>PKR {table.price}/-</small>
                  <button
                    type="button"
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
    </div>
  );
}

export default DiningTableGrid;
