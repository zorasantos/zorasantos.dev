import { render, screen } from '@/utils/test';
import PostDetails from '.';

describe('Post details Component', () => {
  test('Should be able renders post detail correctly', () => {
    const post =
      { author: "Test author", title: "Test Title", publishedAt: "01/01/2023", description: "Test Description",}

    render(<PostDetails { ...post } />);

    const image = screen.getByRole("img", { name: "photo author" })
    const publishedAt = screen.getByLabelText("Data de publicação").getAttribute('aria-label')
    const title = screen.getByRole("heading", { name: "Test Title" })
    const description = screen.getByLabelText("Descrição").getAttribute('aria-label')

    expect(image).toBeDefined()
    expect(publishedAt).toBeDefined()
    expect(title).toBeDefined()
    expect(description).toBeDefined()
  });
})