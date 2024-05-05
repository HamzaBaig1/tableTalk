import "./category.css";
import CategoryIcon from "@mui/icons-material/Category";
import img1 from "../assets/living-room-with-couch-PCX2KY5.jpg";
import img2 from "../assets/plants-in-bedroom-PCG4VC3.jpg";
import img3 from "../assets/teal-bar-stools-PWX82EQ.jpg";
import img4 from "../assets/table-with-chairs-P49WFXV.jpg";
import img5 from "../assets/light.jpg";
function Category() {
  return (
    <section className="category">
      <div className="container">
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
            <div className="left me-md-5 ">
              <img src={img1} alt="" className="hover" />
              <p className="mt-2 fw-bold text-start ">SOFA</p>
            </div>
            <div className="right d-flex flex-column justify-content-center align-items-center ">
              <div>
                <img src={img3} alt="" className="hover" />
                <p className="mt-2 fw-bold text-start">CHAIR</p>
              </div>
              <div>
                <img src={img2} alt="" className="hover" />
                <p className="mt-2 fw-bold text-start">BED</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-md-flex d-sm-block text-center">
            <div className="left me-md-5 mt-5">
              <p className="mt-2 fw-bold text-start">TABLE</p>
              <img src={img4} alt="" className="hover" />
            </div>
            <div>
              <div className="mt-md-0 mt-3">
                <img src={img5} alt="" className="hover" />
                <p className="mt-2 fw-bold text-start">DINING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
