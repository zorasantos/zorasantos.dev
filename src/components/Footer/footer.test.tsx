import { render, screen } from '@/utils/test';
import Footer from '.';

describe('Code Component', () => {
  test('Should be able renders footer correctly', () => {
    render(<Footer />);

    const linkedinIcon = screen.getAllByRole("img", { name: "Linkedin Icon" })
    const gitHubIcon = screen.getAllByRole("img", { name: "Github Icon" })
    const youtubeIcon = screen.getAllByRole("img", { name: "Youtube Icon" })

    const linkLinkedin = screen.getAllByRole("link", { name: "Linkedin Icon" })
    const linkGithub = screen.getAllByRole("link", { name: "Github Icon" })
    const linkYoutube = screen.getAllByRole("link", { name: "Youtube Icon" })

    expect(linkedinIcon).toBeDefined()
    expect(linkedinIcon[0].getAttribute('alt')).toBe('Linkedin Icon')

    expect(gitHubIcon).toBeDefined()
    expect(gitHubIcon[0].getAttribute('alt')).toBe('Github Icon')

    expect(youtubeIcon).toBeDefined()
    expect(youtubeIcon[0].getAttribute('alt')).toBe('Youtube Icon')

    expect(linkLinkedin[0].getAttribute('href')).toBe('https://www.linkedin.com/in/zoranildosantos/')
    expect(linkGithub[0].getAttribute('href')).toBe('https://github.com/ZoraSantos')
    expect(linkYoutube[0].getAttribute('href')).toBe('https://www.youtube.com/@MrZoranildo')
  });
})