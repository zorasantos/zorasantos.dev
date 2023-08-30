"use client"
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function handleKeyUp(event: React.KeyboardEvent) {
  if (event.key === 'Enter') {
    scrollToTop();
  }
}