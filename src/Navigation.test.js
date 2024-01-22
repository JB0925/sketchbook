import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders Navigation component without crashing', () => {
    render(<Navigation />);
  });

  it('adds a pencil when "Add Pencil" button is clicked', () => {
    const { getByText } = render(<Navigation />);
    const addPencilButton = getByText('Add Pencil');
    fireEvent.click(addPencilButton);
  });

  it('toggles drawing mode when "Toggle Drawing Mode" button is clicked', () => {
    const { getByText } = render(<Navigation />);
    const toggleDrawingButton = getByText('Toggle Drawing Mode');
    fireEvent.click(toggleDrawingButton);
  });

});
