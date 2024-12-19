// ItemCard.js
import React, { useState } from "react";
import Modal from "./Layout/Modal";

const ItemCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="row">
      <div key={product.id} className="col-md-4 mb-3">
        <div className="card">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              cumque.
            </p>
            <small>PKR 2200/-</small>
            <button onClick={handleQuickView}>Quick View</button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {/* Add more details here */}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
