import { fireEvent, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

describe('Increment', () => {
  it('knows that clicking the increment button twice is 2', () => {
    render(<App />);
    const incrementCountButton = screen.getByText("Increment count");

    // Click twice
    fireEvent.click(incrementCountButton);
    fireEvent.click(incrementCountButton);
    
    const actual = screen.getByText(/Count: \d/);
    const expected = "Count: 2";
    expect(actual).toHaveTextContent(expected);
  })
});