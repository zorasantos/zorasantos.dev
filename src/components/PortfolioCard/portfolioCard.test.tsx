import { render, screen } from '@/utils/test';
import PortfolioCard from '.';

describe('Portfolio Card Component', () => {
  test('Should be able renders portfolio card correctly', () => {
    const items = { title: "Test Title", description: "Test Description", slug: "test-title" }

    render(<PortfolioCard { ...items } />);

    const title = screen.getByRole("heading", { name: "Test Title" })
    const description = screen.getByLabelText("Descrição portfolio card").getAttribute('aria-label')
    const icon = screen.getByRole("img", { name: "icon arrow forward" })
    const moreDetails = screen.getByText('Mais Detalhes')


    expect(title).toBeDefined()
    expect(description).toBeDefined()
    expect(icon).toBeDefined()
    expect(icon.getAttribute('alt')).toBe('icon arrow forward')
    expect(moreDetails).toBeDefined()

  });
})