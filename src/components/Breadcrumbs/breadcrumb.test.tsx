import { render, screen } from "@/utils/test"
import Breadcrumb from "."

describe("Breadcrumb component", () => {
  test("Should be able renders the Breadcrumb correctly", () => {
    render(<Breadcrumb page="Blog" title="Test Article Title" />)

    const logo = screen.getByRole("img", { name: "home icon" })
    const icon = screen.getAllByRole("img", { name: "icon chevron right" })
    const link = screen.getByRole("link", { name: "Blog" })
    const linkIcon = screen.getByRole("link", { name: "home icon" })

    expect(logo).toBeDefined()
    expect(icon).toBeDefined()
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('/')
    expect(linkIcon.getAttribute('href')).toBe('/')
    expect(logo.getAttribute('aria-label')).toBe('home icon')
  })
})