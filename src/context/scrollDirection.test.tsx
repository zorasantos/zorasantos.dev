import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollDirectionProvider, ScrollDirectionContext } from './ScrollDirection';
import { Header } from '@/components';

describe("Scroll Direction Context", () => {
  test('Teste', () => {
    render(
      <ScrollDirectionProvider>
        <ScrollDirectionContext.Consumer>
          {
            value => <span> isHidden by default: { value.isHidden.toString() }</span>
          }
        </ScrollDirectionContext.Consumer>
      </ScrollDirectionProvider>
    );

    const defaultValue = screen.getByText('isHidden by default: false')
    expect(defaultValue).toBeTruthy()
  });

  test('Teste de contexto', () => {
    const isHidden = true
    render(
      <ScrollDirectionProvider>
        <ScrollDirectionContext.Provider value={{ isHidden }}>
          <Header />
        </ScrollDirectionContext.Provider>
      </ScrollDirectionProvider>
    );

    const headerElement = screen.getByRole('banner')
    expect(headerElement.className).toContain('top-[-6rem]');
  });
})

