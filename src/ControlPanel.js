// ControlPanel.js
import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onAddStickyNote, onAddPencil, onAddPaperclip, onAddEraser, onAddCircle, onAddSquare, onAddText, onAddPenImage, onToggleDrawingMode, onSaveCanvas, onExportCanvas, onRandomCanvas, onClearCanvas, onShareCanvas  }) => {
  return (
    <div className="controlpanel-container">
      {/* <button className="button sticky-note" onClick={onAddStickyNote}>Add Sticky Note</button>
      <button className="button pencil" onClick={onAddPencil}>Add Pencil</button>
      <button className="button paperclip" onClick={onAddPaperclip}>Add Paperclip</button>
      <button className="button eraser" onClick={onAddEraser}>Add Eraser</button>
      <button className="button text" onClick={onAddText}>Add Text</button>
      <button className="button circle" onClick={onAddCircle}>Add Circle</button>
      <button className="button square" onClick={onAddSquare}>Add Square</button>
      <button className="button pen-image" onClick={onAddPenImage}>Add Pen Image</button>
      <button className="button toggle-drawing" onClick={onToggleDrawingMode}> Toggle Drawing Mode </button> */}
      <button className="button save" onClick={onSaveCanvas}> Save Canvas </button>
      <button className="button random" onClick={onRandomCanvas}> Random Canvas </button>
      <button className="button clear" onClick={onClearCanvas}> Clear Canvas </button>
      <button className="button export" onClick={onExportCanvas}> Export Canvas </button>
      {/* <button onClick={onShareCanvas}>Share</button> */}
    </div>
  );
};

export default ControlPanel;
