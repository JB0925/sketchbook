import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sketchbook from './Sketchbook';

describe('Sketchbook Component', () => {
  it('renders Sketchbook component without crashing', () => {
    render(<Sketchbook />);
  });

  it('toggles drawing mode when "Toggle Drawing Mode" button is clicked', () => {
    const { getByText } = render(<Sketchbook />);
    const toggleDrawingButton = getByText('Toggle Drawing Mode');
    fireEvent.click(toggleDrawingButton);
  });

  it('adds a pencil image when "Add Pencil" button is clicked', () => {
    const { getByText } = render(<Sketchbook />);
    const addPencilButton = getByText('Add Pencil');
    fireEvent.click(addPencilButton);
  });


});
