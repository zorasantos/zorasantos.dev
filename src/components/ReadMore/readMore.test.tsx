import { render, screen } from '@/utils/test';
import ReadMore from '.';

describe('Read more Component', () => {
  test('Should be able renders ReadMore component correctly', () => {
    const items = { text: "Test Text", className: "mb-3" }

    render(<ReadMore { ...items } />);

    const container = screen.getByTestId('container-read-more');
    const text = screen.getByText("Test Text")
    const icon = screen.getByLabelText("read more icon").getAttribute('aria-label')

    expect(text).toBeDefined()
    expect(icon).toBeDefined()
    expect(container.className).toContain('mb-3');
  });
})