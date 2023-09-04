import { render, screen } from '@/utils/test';
import Tags from '.';

describe('Tags Component', () => {
  test('Should be able renders tags correctly', () => {
    const tags = ['JavaScript', 'React', 'TypeScript'];

    render(<Tags tags={tags} />);

    tags.forEach((tag) => {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeDefined()
    });

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(tags.length);

    tags.forEach((tag, index) => {
      const links = screen.getAllByRole("link")
      const expectedHref = `/tags/${tag}`;
      const linkElement = links[index];
      expect(linkElement.getAttribute('href')).toBe(expectedHref)
    });
  });
})