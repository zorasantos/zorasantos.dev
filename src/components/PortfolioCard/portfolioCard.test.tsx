import { render, screen } from '@/utils/test';
import PortfolioCard from '.';

describe('Portfolio Card Component', () => {
  test('Should be able renders portfolio card correctly', () => {
    const items = { title: "Test Title", description: "Test Description", slug: "test-title" }

    render(<PortfolioCard { ...items } />);

    const title = screen.getByText("Test Title")
    const description = screen.getByLabelText("Descrição portfolio card").getAttribute('aria-label')

    expect(title).toBeDefined()
    expect(description).toBeDefined()
  });
})