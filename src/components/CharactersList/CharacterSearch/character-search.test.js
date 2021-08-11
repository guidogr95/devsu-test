import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
// components
import CharacterSearch from './index';


describe('<CharacterSearch/>', () => {
  let component;
  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(<CharacterSearch onSubmit={mockHandler}/>);
  })

  test('renders content', () => {
    expect(component).toBeTruthy();
  })

  test('renders the input', () => {
    expect(screen.getByRole('searchbox', { name: /buscar por nombre/i })).toBeInTheDocument();
  })

  test('clicking submit button calls event handler once', () => {  
    const button = component.getByText('buscar');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  })
})