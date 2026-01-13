import { render } from '@testing-library/react-native';
import Header from './header';

describe('Header Component', () => {
  it('should render the header component', () => {
    const { getByText } = render(<Header />);
    expect(getByText('My App')).toBeTruthy();
  });

  it('should display the correct title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText('My App');
    expect(titleElement).toBeTruthy();
  });
});
