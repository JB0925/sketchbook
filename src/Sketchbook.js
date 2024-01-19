import React, { useEffect, useState, useCallback } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import Navigation from './Navigation';
import StickyNote from './StickyNote';
import Pencil from './Pencil';
import Eraser from './Eraser';
import PaperClip from './PaperClip';
import ControlPanel from './ControlPanel';
import { fabric } from 'fabric';
import imgPencil from './imgs/Pencil.png';

// import styled from "styled-components";

// import WebFont from 'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&display=swap';

import './Sketchbook.css';

const Sketchbook = () => {
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight -100});
  const { editor, onReady } = useFabricJSEditor();
  const [drawingMode, setDrawingMode] = useState(false); // Add this line


  const updateCanvasSize = useCallback((width, height) => {
    if (editor) {
      editor.canvas.setWidth(width);
      editor.canvas.setHeight(height);
      editor.canvas.renderAll();
    }
  }, [editor]);

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight-100 });
      updateCanvasSize(window.innerWidth, window.innerHeight-100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [editor, updateCanvasSize]);

  useEffect(() => {
    updateCanvasSize(canvasSize.width, canvasSize.height);
  }, [editor, updateCanvasSize, canvasSize]);

  const addComponent = (Component) => {
    console.log(`Adding ${Component.name}...`);
    
    if (editor) {
      const fabricComponent = new Component(); // Create an instance of the component
      editor.canvas.add(fabricComponent);
      editor.canvas.setActiveObject(fabricComponent);
      editor.canvas.renderAll();
    }
  };
  
  const addStickyNote = () => {
    console.log("Adding Sticky Note...");
    addComponent(StickyNote);
  };

  const addPaperclip = () => {
    console.log("Adding Paperclip...");
    addComponent(PaperClip);
  };

  const addPencil = () => {
    console.log("Adding Pencil...");
    addComponent(Pencil);
  };

  const addEraser = () => {
    console.log("Adding Eraser...");
    addComponent(Eraser);
  };

  const addPenImage = () => {
    console.log("Adding Pen Image...");
    // Assuming that Pencil is an Image, otherwise, you may need to adjust this part
    const imgUrl = imgPencil;
      fabric.Image.fromURL(imgUrl, (img) => {
        img.set({

          left: -200,
          top: window.innerHeight/100,
          angle:10,
          scaleX: 0.5,
          scaleY: 0.5,

          shadow: {
            color: 'rgba(0, 0, 0, 0.5)', // Shadow color
            blur: 20, // Shadow blur
            offsetX: 15, // Horizontal offset of the shadow
            offsetY: 15, // Vertical offset of the shadow
          },

          borderColor: 'transparent', // Make border invisible
          cornerColor: 'transparent', // Make corner invisible
          cornerStrokeColor: 'transparent', // Make corner stroke invisible
          cornerStyle: 'invisible', // Hide corner altogether
          transparentCorners: true, // Ensure transparent corners
          padding: 0, // Remove padding around the object
          borderDashArray: [3, 3], // Optionally add a dash array to the border (dashed border)
     
        });

      editor.canvas.add(img);
      editor.canvas.setActiveObject(img);
      editor.canvas.renderAll();
    });
  };

  const addCircle = () => {
    console.log("Adding Circle...");
    const fabricCircle = new fabric.Circle({ 
      
      left: window.innerWidth/2,
      top: window.innerHeight/2,

      radius: 50, 
      fill: 'blue',
      borderColor: 'black',
      cornerColor: 'black'});
    editor.canvas.add(fabricCircle);
    editor.canvas.setActiveObject(fabricCircle);
    editor.canvas.renderAll();
  };

  const addSquare = () => {
    console.log("Adding Circle...");
    const fabricSquare = new fabric.Rect({
      
      left: window.innerWidth/2,
      top: window.innerHeight/2,

      width: 50,
      height: 50,
      fill: 'red',
      borderColor: 'black',
      cornerColor: 'black'
    });
    
    editor.canvas.add(fabricSquare);
    editor.canvas.setActiveObject(fabricSquare);
    editor.canvas.renderAll();
  };


  const addText = () => {
    console.log("Adding Circle...");
    const fabricText = new fabric.IText('Hello, Fabric.js!', {
      
          left: window.innerWidth/2,
          top: window.innerHeight/2,

      fill: 'black',
      fontFamily: 'handwriting',

      borderColor: 'black',
      cornerColor: 'black'
    
    });
    editor.canvas.add(fabricText);
    editor.canvas.setActiveObject(fabricText);
    editor.canvas.renderAll();
  };

  const startDrawing = () => {
    if (editor) {
      editor.canvas.isDrawingMode = true;
      editor.canvas.freeDrawingBrush = new fabric.PencilBrush(editor.canvas);
      editor.canvas.freeDrawingBrush.color = 'black'; // Set the drawing color
      editor.canvas.freeDrawingBrush.width = 3; // Set the drawing width
    }
  };

  const stopDrawing = () => {
    if (editor) {
      editor.canvas.isDrawingMode = false;
    }
  };

  const toggleDrawingMode = () => {
    setDrawingMode(!drawingMode);
  
    if (editor) {
      editor.canvas.isDrawingMode = !drawingMode;
  
      if (drawingMode) {
        // If drawing mode was active, deactivate it
        editor.canvas.off('path:created');
      } else {
        // If drawing mode was inactive, activate it
        editor.canvas.on('path:created', (options) => {
          const path = options.path;
          path.set({ selectable: false, evented: false });
        });
      }
    }
  };

  


  return (
    <div className='sketchbook-container'>
      <Navigation
        onAddStickyNote={addStickyNote}
        onAddPencil={addPencil}
        onAddPaperclip={addPaperclip}
        onAddEraser={addEraser}
        onAddCircle={addCircle}
        onAddSquare={addSquare}
        onAddText={addText}
        onAddPenImage={addPenImage}
        onToggleDrawingMode={toggleDrawingMode}
      />
      <FabricJSCanvas className="sketchbook-canvas" onReady={onReady} />
      <ControlPanel
        onAddStickyNote={addStickyNote}
        onAddPencil={addPencil}
        onAddPaperclip={addPaperclip}
        onAddEraser={addEraser}
        onAddCircle={addCircle}
        onAddPenImage={addPenImage}
        onToggleDrawingMode={toggleDrawingMode}
      />
    </div>
  );
};

export default Sketchbook;
