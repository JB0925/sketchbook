// Navigation.js
import React, { useState, useRef, useEffect } from "react";
import "./Navigation.css";
import { ChromePicker, SketchPicker } from "react-color";

const Navigation = ({
  onAddStickyNote,
  onAddPencil,
  onAddPaperclip,
  onAddEraser,
  onAddCircle,
  onAddSquare,
  onAddText,
  onAddPenImage,
  onToggleDrawingMode,
  onSaveCanvas,
  onRandomCanvas,
  onClearCanvas,
  brushSize,
  brushColor,
  onBrushSizeChange,
  onBrushColorChange,
}) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      // Close color picker if clicked outside of it
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setColorPickerVisible(false);
      }
    };

    // Attach the event listene
    document.addEventListener("click", handleClick);

    // Detach the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleColorButtonClick = () => {
    onToggleDrawingMode(false);
    setColorPickerVisible(!colorPickerVisible);
  };

  const handleColorChange = (color) => {
    onToggleDrawingMode(false);
    onBrushColorChange(color.hex);
  };

  const handleBrushSizeChange = (e) => {
    onToggleDrawingMode(false);
    onBrushSizeChange(e.target.value);
  };

  return (
    <div className="navigation-container">
      <div className="paint-tool-container">
        <div className="brush-size-container">
          {/* <label>Brush Size:</label> */}
          <input
            type="range"
            min="1"
            max="10"
            onChange={(e) => handleBrushSizeChange(e)}
          />
        </div>

        <div className="color-picker-container" ref={colorPickerRef}>
          {/* <label>Brush Color:</label> */}
          <button
            className="color-picker-button"
            onClick={handleColorButtonClick}
            style={{ backgroundColor: brushColor }}></button>
          {colorPickerVisible && (
            <div className="color-picker-popover">
              <ChromePicker color={brushColor} onChange={handleColorChange} />
            </div>
          )}
        </div>
      </div>

      {/* <button className="button sticky-note" onClick={onAddStickyNote}>Add Sticky Note</button> */}
      <button className="button pencil" onClick={onAddPencil}>
        Add Pencil
      </button>
      <button className="button paperclip" onClick={onAddPaperclip}>
        Add Paperclip
      </button>
      <button className="button eraser" onClick={onAddEraser}>
        Add Eraser
      </button>
      {/* <button className="button text" onClick={onAddText}>Add Text</button> */}
      <button className="button circle" onClick={onAddCircle}>
        Add Circle
      </button>
      <button className="button square" onClick={onAddSquare}>
        Add Square
      </button>
      {/* <button className="button pen-image" onClick={onAddPenImage}>Add Pen Image</button> */}
      <button className="button toggle-drawing" onClick={onToggleDrawingMode}>
        {" "}
        Toggle Drawing Mode{" "}
      </button>
      {/* <button className="button save" onClick={onSaveCanvas}> Save Canvas </button>
      <button className="button random" onClick={onRandomCanvas}> Random Canvas </button>
      <button className="button clear" onClick={onClearCanvas}> Clear Canvas </button> */}
    </div>
  );
};

export default Navigation;
