// Navigation.js
import React from 'react';
// import './ControlPanel.css';

const ControlPanel = ({ onAddStickyNote, onAddPencil, onAddPaperclip, onAddEraser, onAddCircle, onAddPenImage }) => {
  return (
    <div className="controlpanel-container">
      <button className="button sticky-note" onClick={onAddStickyNote}>Add Sticky Note</button>
      <button className="button pencil" onClick={onAddPencil}>Add Pencil</button>
      <button className="button paperclip" onClick={onAddPaperclip}>Add Paperclip</button>
      <button className="button eraser" onClick={onAddEraser}>Add Eraser</button>
      <button className="button circle" onClick={onAddCircle}>Add Circle</button>
      <button className="button pen-image" onClick={onAddPenImage}>Add Pen Image</button>
    </div>
  );
};

export default ControlPanel;
