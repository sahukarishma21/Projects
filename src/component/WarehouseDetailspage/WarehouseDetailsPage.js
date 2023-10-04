import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component
import data from '../../data.json';
import './WarehouseDetailsPage.css'; // Import the CSS file



function WarehouseDetailsPage() {
  const { id } = useParams();
  const warehouse = data.find((item) => item.id === parseInt(id));
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(warehouse.name);

  if (!warehouse) {
    return <div>Warehouse not found</div>;
  }

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSaveName = () => {
    warehouse.name = editedName;
    setIsModalOpen(false);
  };

  return (
    <div className="warehouse-details-container">
      <h1 className="warehouse-details-title">Warehouse Details</h1>
      <p>ID: {warehouse.id}</p>
      <p className="warehouse-name">Name: {warehouse.name}</p>
      <p>Code: {warehouse.code}</p>
      <p>City: {warehouse.city}</p>
      <p>Type: {warehouse.type}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
  
      <button className="edit-button" onClick={handleEditClick}>Edit</button>
  
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Warehouse"
      >
        <h2>Edit Warehouse</h2>
        <label>
          New Name:
          <input
            type="text"
            className="name-input"
            value={editedName}
            onChange={handleNameChange}
          />
        </label>
        <button className="save-button" onClick={handleSaveName}>Save</button>
        <button className="close-button" onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

export default WarehouseDetailsPage;
