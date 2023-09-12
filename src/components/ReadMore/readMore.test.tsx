import { render, screen } from '@/utils/test';
import ReadMore from '.';

describe('Read more Component', () => {
  test('Should be able renders ReadMore component correctly', () => {
    const items = { text: "Test Text" }

    render(<ReadMore { ...items } />);

    const text = screen.getByText("Test Text")
    const icon = screen.getByLabelText("read more icon").getAttribute('aria-label')

    expect(text).toBeDefined()
    expect(icon).toBeDefined()
  });

  test('Should be able renders ReadMore component with slug and className correctly', () => {
    const items = { text: "Test Text", slug: 'slug-test', className: "mb-3" }

    render(<ReadMore { ...items } />);

    const icon = screen.getByLabelText("read more icon").getAttribute('aria-label')
    const container = screen.getByTestId('container-read-mode');
    const link = screen.getByRole("link", { name: "Test Text" })

    expect(icon).toBeDefined()
    expect(link).toBeDefined()
    expect(container.className).toContain('mb-3');
  });
})