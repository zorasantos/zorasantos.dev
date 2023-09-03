import { render, screen } from '@/utils/test';
import Code from '.';

describe('Code Component', () => {
  test('Renders code with specified language', () => {
    const code = 'const greeting = "Hello, world!";';
    const language = 'javascript';

    render(<Code language={language}>{code}</Code>);
    // Write tests later
  });
})