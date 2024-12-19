import "./category.css";
import CategoryIcon from "@mui/icons-material/Category";
import img3 from "../../assets/chair.png";
import img2 from "../../assets/restaurant.png";
import img4 from "../../assets/office-chair.png";
import img5 from "../../assets/furniture-and-household.png";
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

        <div className="row mt-md-5 mt-sm-3 ">
          <div className="col-lg-6 col-sm-12 d-md-flex d-sm-block text-center">
            <div className="left me-md-5 mt-5 pointer  ">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={"/OfficeChairs/RevolvingChairs"}
              >
                <img src={img4} alt="" className="hover category-img " />
                <p className="mt-3 fw-bold text-md-center text-sm-center">
                  OFFICE CHAIRS
                </p>
              </Link>
            </div>
            <div>
              <div className=" mt-5 pointer ">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/OfficeTables/ExecutiveTables"}
                >
                  <img src={img5} alt="" className="hover category-img" />
                  <p className="mt-3 fw-bold  sm-display  text-center">
                    OFFICE TABLES
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-md-flex d-sm-block text-center ">
            <div className="left me-md-5 mt-5 pointer ">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={"/DiningChairs"}
              >
                <img src={img3} alt="" className="hover category-img" />
                <p className="mt-2 fw-bold  text-center ">DINING CHAIRS</p>
              </Link>
            </div>
            <div>
              <div className="mt-5 pointer ">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/DiningTables"}
                >
                  <img src={img2} alt="" className="hover category-img" />
                  <p className="mt-2 fw-bold  lg-display text-center ">
                    DINING TABLES
                  </p>
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
