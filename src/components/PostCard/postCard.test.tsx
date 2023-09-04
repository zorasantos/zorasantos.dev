import { render, screen } from '@/utils/test';
import PostCard from '.';

describe('Post card Component', () => {
  test('Should be able renders post card correctly', () => {
    const post =
      { title: "Test 1", publishedAt: "01/01/2023", description: "Test Description",
      tags: ["api", "test"], slug: "test-1" }

    render(<PostCard { ...post } />);

    const image = screen.getByRole("img", { name: "photo author" })
    const publishedAt = screen.getByLabelText("Data de publicação").getAttribute('aria-label')
    const title = screen.getByRole("heading", { name: "Test 1" })
    const description = screen.getByLabelText("Descrição").getAttribute('aria-label')
    const tags = screen.getByLabelText("Lista de tags").getAttribute('aria-label')
    const icon = screen.getByRole("img", { name: "icon arrow forward" })
    const moreRead = screen.getByText('Ler Mais')


    expect(image).toBeDefined()
    expect(publishedAt).toBeDefined()
    expect(title).toBeDefined()
    expect(description).toBeDefined()
    expect(tags).toBeDefined()
    post.tags.forEach((tag) => {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeDefined()
    });
    expect(icon).toBeDefined()
    expect(icon.getAttribute('alt')).toBe('icon arrow forward')
    expect(moreRead).toBeDefined()

  });
})