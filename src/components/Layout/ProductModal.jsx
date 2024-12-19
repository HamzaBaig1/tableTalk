import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Carousel } from "react-bootstrap";
import WhatsappButton from "../Helper/WhatsappButton";

function ProductModal(props) {
  const {
    model,
    material,
    price,
    dimensions,
    specification,
    note,
    size,
    image,
    image2,
    image3,
    image4,
  } = props.data;
  const images = [image, image2, image3, image4].filter(Boolean);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{model}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              {images.length > 0 ? (
                <Carousel
                  controls={images.length > 1}
                  indicators={images.length > 1}
                >
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No images available.</p>
              )}
            </Col>
            <Col xs={12} md={6}>
              <h6 className="fw-bold  mt-4 mt-md-0">
                {specification ? "Specification" : "Description"}
              </h6>
              <p> {specification ? specification : material}</p>
              <h6 className="fw-bold">{dimensions || size ? "Size" : ""}</h6>
              <p>{size ? size : dimensions}</p>
              <h6 className="fw-bold">{note ? "Note" : ""}</h6>
              <p>{note ? note : ""}</p>
              <h6 className="fw-bold">Price</h6>
              <p>PKR {price}/-</p>
              {/* <h6 className="fw-bold">Contact</h6> */}
              <WhatsappButton data={props.data} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;

// // import { useEffect, useState } from "react";
// import WhatsappButton from "../Helper/WhatsappButton";
// import { Carousel, Modal } from "react-bootstrap";
// import "./CustomModal.css";

// function ProductModal({ data, show, onHide }) {
//   const { image, image2, image3 } = data;
//   const images = [image, image2, image3].filter(Boolean);

//   return (
//     <div>
//       <Modal
//         show={show}
//         onHide={onHide}
//         backdropClassName="custom-modal-backdrop"
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{data.model}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="row">
//             <div className="col-sm-12 col-md-6">

/* <Carousel
  interval={null}
  // onSelect={handleSelect}
  // activeIndex={activeIndex}
>
  {images.map((image, index) => (
    <Carousel.Item key={index}>
      <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
    </Carousel.Item>
  ))}
</Carousel>; */

//             </div>
//             <div className="col-sm-12 col-md-6">
//               <h6 className="fw-bold  mt-4 mt-md-0">Description</h6>
//               <p>{data.material}</p>
//               <h6 className="fw-bold">Sizes</h6>
//               <p>{data.dimensions}</p>
//               <h6 className="fw-bold">Price</h6>
//               <p>PKR {data.price}/-</p>
//               <h6 className="fw-bold">Contact</h6>
//               <WhatsappButton data={data} />
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default ProductModal;
