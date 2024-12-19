import "./category.css";
import CategoryIcon from "@mui/icons-material/Category";
import img4 from "../assets/table-with-chairs-P49WFXV.jpg";
import img5 from "../assets/light.jpg";
import { Link } from "react-router-dom";
function Category() {
  return (
    <section className="category">
      <div className="container-fluid">
        <div className="row">
          <div className="text-center">
            <h2 className="fw-bold fs-1">Categories</h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear">
                <CategoryIcon />
              </i>
            </p>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-lg-6 col-sm-12 d-md-flex d-sm-block text-center">
            <div className="left me-md-5 mt-5 pointer">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={"/OfficeChairs"}
              >
                <p className="mt-2 fw-bold text-start">OFFICE CHAIRS</p>
                <img src={img4} alt="" className="hover" />
              </Link>
            </div>
            <div>
              <div className="mt-md-0 mt-3 pointer">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/OfficeTables"}
                >
                  <img src={img5} alt="" className="hover" />
                  <p className="mt-2 fw-bold text-start">OFFICE TABLES</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-md-flex d-sm-block text-center">
            <div className="left me-md-5 mt-5 pointer">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={"/DiningChairs"}
              >
                <p className="mt-2 fw-bold text-start">DINING CHAIRS</p>
                <img src={img4} alt="" className="hover" />
              </Link>
            </div>
            <div>
              <div className="mt-md-0 mt-3 pointer">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/DiningTables"}
                >
                  <img src={img5} alt="" className="hover" />
                  <p className="mt-2 fw-bold text-start">DINING TABLES</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
