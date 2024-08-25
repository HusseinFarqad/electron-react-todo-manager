import React from "react";

function ConfirmDelete({ isOpen, onClose, onConfirm, todoText }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-delete-overlay">
      <div className="confirm-delete-modal">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete the todo: "{todoText}"?</p>
        <div className="confirm-delete-actions">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button onClick={onConfirm} className="confirm-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
