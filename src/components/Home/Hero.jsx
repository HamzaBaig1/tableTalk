import img1 from "../../assets/Table Talk.png";
// import img2 from "../../assets/Table.jpg";
import "./hero.css";
function Hero() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="desktop w-100" alt="..." />
          {/* <img src={img2} className="mobile" alt="..." /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
